import { User } from "@prisma/client";
import getCurrentUser from "./getCurrentUser";
import getConversations from "./getConversation";

const getFriends = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser?.id) {
    return [];
  }

  try {
    const conversations = await getConversations();

    const friends = conversations.flatMap(conversation =>
      conversation.users.filter(user => user.id !== currentUser.id)
    );

    // Remover duplicados si un usuario tiene múltiples conversaciones con el usuario actual
    const uniqueFriends = Array.from(new Set(friends.map(friend => friend.id)))
      .map(id => friends.find(friend => friend.id === id))
      .filter((friend): friend is User => friend !== undefined); // Asegurarse de no tener undefined

    return uniqueFriends;
  } catch (error: any) {
    return [];
  }
};

export default getFriends;
