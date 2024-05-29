import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";
import EmptyState from "@/components/users/EmptyState";
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
  conversationId: string;
};

const ConversationId = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }

  // Asumimos que currentUser está definido y es el usuario actual
  const currentUser = await getCurrentUser();
  const otherUser = conversation.users.find(user => user.id !== currentUser?.id);
 
  if (!otherUser) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header conversation={conversation} />
        <Body initialMessages={messages} />
        <Form otherUserId={otherUser.id} />
      </div>
    </div>
  )
};

export default ConversationId;
