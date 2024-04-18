"use client";

import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineGroupAdd } from "react-icons/md";
import styles from "./ConversationList.module.css";

import useConversation from "@/app/hooks/useConversation";
import { FullConversationType } from "@/app/types";

import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import ConversationBox from "./ConversationBox";

interface ConversationListProps {
  initialItems: FullConversationType[];
  users: User[]
}

const ConversationList: React.FC<ConversationListProps> = ({
  initialItems,
  users
}) => {
  const session = useSession();
  const [items, setItems] = useState(initialItems);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const { conversationId, isOpen } = useConversation();

  const pusherKey = useMemo(() => {
    return session.data?.user?.email;
  }, [session.data?.user?.email]);

  


  return (
    <>
      
      <aside
        className={clsx(
            styles.aside, // Usa las clases del archivo CSS importado
            { [styles.hidden]: isOpen }, // Condición para la clase hidden
            { [styles.block]: !isOpen } // Condición para la clase full-width
          )}
        >
        <div className={styles.div}>
          <div className={styles.inside}>
            <div className={styles.text}>
              Messages
            </div>
            <div
              onClick={() => setIsModalOpen(true)}
              className={styles.group}>
              <MdOutlineGroupAdd size={20} />
            </div>
          </div>
          {items.map((item) => (
            <ConversationBox
              key={item.id}
              data={item}
              selected={conversationId === item.id}
            />
          ))}
        </div>
      </aside>
    </>
   );
}
 
export default ConversationList;