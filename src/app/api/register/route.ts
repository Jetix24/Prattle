import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password, bornDate, firstTime, title, description, cover } = body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
        bornDate,
        firstTime,
        title, 
        description, 
        cover
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error, "Registration error");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
