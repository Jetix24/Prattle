"use client";

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Conversation, Message, User } from "@prisma/client";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import useOtherUser from "@/app/hooks/useOtherUser";
import { FullConversationType } from "@/app/types";
import styles from "./ConversationBox.module.css";
import Avatar from "@/components/users/Avatar";

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
        .filter((user) => user.email === userEmail).length !== 0; //Se filtra el array seenArray para ver si el usuario actual ha visto el mensaje
      }, [userEmail, lastMessage]);
    
    const lastMessageText = useMemo(() => {
        if (lastMessage?.image) {
          return 'Sent an image'; // Si el mensaje tiene una imagen, se muestra el texto "Sent an image"
        }
    
        if (lastMessage?.body) {
          return lastMessage.body; // Si el mensaje tiene un cuerpo, se muestra el cuerpo del mensaje
        }
    
        return "Started a conversation"; // Si no hay mensaje, se muestra el texto "Started a conversation"
    }, [lastMessage]);
    

    return ( 
        <div onClick={handleClick} className={clsx(
            styles.aside, // Usa las clases del archivo CSS importado
            { [styles.unselected]: !selected },
            { [styles.selected]: selected }
        )}>
            <Avatar user={otherUser} />
            <div className={styles.box}>
                <div className={styles.divname}>
                    <div className={styles.name}>
                        <p className={styles.text}>
                            { data.name || otherUser.name}
                        </p>
                        {lastMessage?.createdAt && (
                        <p className={styles.time}>
                            {format(new Date(lastMessage.createdAt), 'p')}                        
                        </p>
                         )}
                    </div>
                    <p className={clsx(
                        styles.message, 
                        { [styles.unseen]: !hasSeen },
                        { [styles.seen]: hasSeen }
                    )}>
                        {lastMessageText}
                    </p>
                </div>
            </div>
        </div> 
        
    );
}
 
export default ConversationBox;