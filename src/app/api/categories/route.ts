import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name } = body;

    const existingCategories = await prisma.categories.findUnique({
      where: {
        name: name,
      },
    });

    if (existingCategories) {
      // Si el interés ya existe, devuelve un error
      return new NextResponse("La categoria ya existe", { status: 400 });
    }

    const categories = await prisma.categories.create({
      data: {
        name
      },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.log(error, "Registration error");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
