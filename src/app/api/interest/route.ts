import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import Categorias from '../../admin/categorias/page';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, category ,cover } = body;

    // Verificar si el nombre ya existe
    const existingInterest = await prisma.interests.findUnique({
      where: {
        name: name,
      },
    });

    if (existingInterest) {
      return new NextResponse('El nombre ya existe', { status: 400, headers: { 'Content-Type': 'text/plain' } });
    }

    const categoryIds = category ? category.map((category: { value: string }) => category.value) : [];

  const interest = await prisma.interests.create({
    data: {
      name,
      cover,
      category: {
        connect: categoryIds.map((categoryId) => ({
          id: categoryId,
        })),
      },
    },
  });

    return NextResponse.json(interest);
  } catch (error) {
    console.log(error, "Registration error");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
