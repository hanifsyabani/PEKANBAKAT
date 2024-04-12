
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req : Request) {
  try {
    const { username, email, password, confpassword } = await req.json();
    const cekEmail = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (cekEmail) {
      return NextResponse.json({ message: 'Email already exists' }, { status: 400 });
    }

    if (password !== confpassword) {
      return NextResponse.json({ message: "Password doesn't match" }, { status: 400 });
    }

    const hassPass = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hassPass,
      },
    });

    if (!user) {
      return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}
