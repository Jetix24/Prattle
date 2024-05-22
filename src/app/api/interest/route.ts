import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, cover } = body;

    const existingInterest = await prisma.interests.findUnique({
      where: {
        name: name,
      },
    });

    if (existingInterest) {
      // Si el interés ya existe, devuelve un error
      return new NextResponse("Interest already exists", { status: 400 });
    }

    const interest = await prisma.interests.create({
      data: {
        name,
        cover
      },
    });

    return NextResponse.json(interest);
  } catch (error) {
    console.log(error, "Registration error");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
