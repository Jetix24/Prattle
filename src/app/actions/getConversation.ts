import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getConversations = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser?.id) {
    return [];
  }

  try {
    const conversations = await prisma.conversation.findMany({
      orderBy: {
        lastMessage: 'desc' // Ordenar por el último mensaje enviado
      },
      where: {
        userIds: {
          has: currentUser.id // Se cargan las conversaciones en las que el usuario actual está incluido
        }
      },
      include: {
        users: true,
        messages: {
          include: {
            sender: true, //Autor del mensaje
            seen: true // Si el mensaje fue visto
          }
        }
      }
    });

    return conversations;
  } catch (error: any) {
    return [];
  }
};

export default getConversations;