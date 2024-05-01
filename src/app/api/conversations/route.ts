import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { pusherServer } from "@/app/libs/pusher";

export async function POST(
  request: Request
) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const {
      userId,
      isGroup,
      members,
      name
    } = body;
    // Si no hay usuario actual, no se puede crear una conversación
    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }
    //Si es un grupo pero no hay miembros o no hay nombre, no se puede crear una conversación
    if (isGroup && (!members || members.length < 2 || !name)) {
      return new NextResponse('Invalid data', { status: 400 });
    }

    //En caso de que sea un grupo, se crea la conversación con los miembros y el usuario actual
    if (isGroup) {
      const newConversation = await prisma.conversation.create({
        data: {
          name,
          isGroup,
          users: {
            connect: [
              ...members.map((member: { value: string }) => ({
                id: member.value 
              })),
              {
                id: currentUser.id // se conecta el usuario actual
              }
            ]
          }
        },
        include: { //users es el campo que se quiere incluir en la respuesta
          users: true
        }
      });

     newConversation.users.forEach((user) => {
        if (user.email) {
          pusherServer.trigger(user.email, 'conversation:new', newConversation);
        }
      })

      return NextResponse.json(newConversation);
    }

    //Si no es un grupo, se busca si ya existe una conversación entre el usuario actual y el usuario con el que se quiere crear la conversación
    const exisitingConversations = await prisma.conversation.findMany({
      where: {
        OR: [
          {
            userIds: { //userIds es un campo virtual que se creó en el modelo de conversación
              equals: [currentUser.id, userId] //se busca una conversación donde los userIds sean iguales a los ids del usuario actual y el usuario con el que se quiere crear la conversación
            }
          },
          { //Para evitar bugs, se busca también una conversación donde los userIds sean iguales al revés
            userIds: {
              equals: [userId, currentUser.id]
            }
          }
        ]
      }
    });

    //Si ya existe una conversación, se retorna esa conversación
    const singleConversation = exisitingConversations[0];

    //Se retorna la conversación si ya existe
    if (singleConversation) {
      return NextResponse.json(singleConversation);
    }

    //Si no existe una conversación, se crea una nueva
    const newConversation = await prisma.conversation.create({
      data: {
        users: {
          connect: [ //Se conectan los usuarios actual y el usuario con el que se quiere crear la conversación
            {
              id: currentUser.id
            },
            {
              id: userId
            }
          ]
        }
      },
      include: { //Se incuye el objeto de usuarios en la respuesta
        users: true
      }
    });

    newConversation.users.map((user) => {
      if (user.email) {
        pusherServer.trigger(user.email, 'conversation:new', newConversation);
      }
    }) 

    return NextResponse.json(newConversation);
  } catch (error: any) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}