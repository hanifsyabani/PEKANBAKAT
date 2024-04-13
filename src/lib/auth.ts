import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import bcrypt from 'bcrypt'

async function login(credentials :{email: string, password: string}) {
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
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {},
      async authorize(credentials: Record<string, string> | undefined) {
        const user = await login(
          credentials as { email: string; password: string }
        );
        if (!user) return null;

        return {
          id: user.id.toString(),
          name: user.username,
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (!user) return token;
      return { ...token, id: user.id };
    },
    session({ session, token }) {
      return { ...session, id: token.id };
    },
  },
};
