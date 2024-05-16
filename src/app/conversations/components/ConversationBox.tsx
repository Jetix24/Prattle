"use client";

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Conversation, Message, User } from "@prisma/client";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import styles from "./ConversationList.module.css";
import clsx from "clsx";

import { FullConversationType } from "@/app/types";
import useOtherUser from "@/app/hooks/useOtherUser";
import Avatar from "@/components/users/Avatar";
import AvatarGroup from "@/components/users/AvatarGroup";

interface ConversationBoxProps {
  data: FullConversationType,
  selected?: boolean;
}

const ConversationBox: React.FC<ConversationBoxProps> = ({
  data,
  selected
}) => {
  const otherUser = useOtherUser(data);
  const session = useSession();
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/conversations/${data.id}`);
  }, [data.id, router]);

  const lastMessage = useMemo(() => {
    const messages = data.messages || [];

    return messages[messages.length - 1];
  }, [data.messages]);

  const userEmail = useMemo(() => {
    return session.data?.user?.email;
  }, [session.data?.user?.email]);

  const hasSeen = useMemo(() => {
    if (!lastMessage) {
      return false;
    }

    const seenArray = lastMessage.seen || [];

    if (!userEmail) {
      return false;
    }

    return seenArray
    .filter((user) => user.email === userEmail).length !== 0;
  }, [userEmail, lastMessage]);

  const lastMessageText = useMemo(() => {
    if (lastMessage?.image) {
      return 'Sent an image';
    }

    if (lastMessage?.body) {
      return lastMessage.body;
    }

    return "Empezar una conversación";
  }, [lastMessage]);

  return ( 
    <div
      onClick={handleClick}
      className={clsx(`
        w-full,
        relative
        flex
        items-center
        space-x-3
        hover:bg-neutral-100
        rounded-lg
        transition
        cursor-pointer
        p-3
        my-2
      ${styles.bgPrattlehover}`,
        selected ? `${styles.bgPrattleclear}` : `${styles.bgPrattle}`
      )}
    >
      {data.isGroup ? (
        <AvatarGroup users={data.users} />
      ) : (
        <Avatar user={otherUser} />
      )}
      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <div
            className="
              flex
              justify-between
              items-center
              mb-1
            "
          >
            <p
              className="
                text-md
                font-medium
                text-white
              "
            >
              {data.name || otherUser?.name}
            </p>
            {lastMessage?.createdAt && (
              <p
                className="
                  text-xs
                  text-neutral-300
                  font-light
                "
              >
                {format(new Date(lastMessage.createdAt), 'p')}
              </p>
            )}
          </div>
          <p
            className={clsx(`
              truncate
              text-sm
            `,
              hasSeen ? 'text-neutral-400' : 'text-neutral-300 font-medium'
            )}
          >
            {lastMessageText}
          </p>
        </div>
      </div>
    </div>
   );
}
 
export default ConversationBox;