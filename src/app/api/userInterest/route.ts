import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const { name, category, cover, interests } = body;

    if (!currentUser?.id) {
        return new NextResponse('Unauthorized', { status: 401 });
      }

    const userInterest = await prisma.user.update({
        where: {
          id: currentUser.id // Asegúrate de que estás recibiendo este valor desde algún lugar
        },
        data: {
          interests: {
            connect: interests.map((interestId: string) => ({ id: interestId })),
          },
        },
      });

    return NextResponse.json(userInterest);
  } catch (error) {
    console.log(error, "Registration error");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
