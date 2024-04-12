import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import bcrypt from 'bcrypt'

async function login(credentials: any) {
  const { email, password } = credentials;

  const user = await prisma.user.findFirst({
    where: { email }
  });

  if (!user) {
    return null;
  }
  const compare = await bcrypt.compare(password, user.password);
  if (!compare) {
    return null;
  }

  return user; // login success
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/login'
  },
  session: {
    strategy: 'jwt'
  },
  providers: [
    Credentials({
      credentials: {},
      async authorize(credentials) {
        const user = await login(credentials);
        if (!user) return null;

        return {
          id: user.id,
          name: user.username,
          email: user.email,
          password: user.password
        };
      }
    })
  ],
  callbacks: {
    jwt({ token, user }) {
      if (!user) return token;
      return { ...token, id: user.id };
    },
    session({ session, token }) {
      return { ...session, id: token.id };
    }
  }
};
