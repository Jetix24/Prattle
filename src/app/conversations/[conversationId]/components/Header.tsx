"use client";

import useOtherUser from "@/app/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import styles from "./Form.module.css";
import { useMemo, useState } from "react";
import Link from "next/link";
import { HiChevronLeft, HiEllipsisHorizontal } from "react-icons/hi2";
import Avatar from "@/components/users/Avatar";
import ProfileDrawer from "./ProfileDrawer";
import AvatarGroup from "@/components/users/AvatarGroup";
import useActiveList from "@/app/hooks/useActiveList";

interface HeaderProps {
    conversation: Conversation & {
      users: User[]
    }
  };

const Header: React.FC<HeaderProps> = ({
    conversation
}) => {
    const otherUser = useOtherUser(conversation);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const { members } = useActiveList();
    const isActive = members.indexOf(otherUser?.email!) !== -1;

    const statusText = useMemo(() => {
        if(conversation.isGroup) {
            return `${conversation.users.length} miembros`;
        }   

        return isActive ? 'En linea' : 'Desconectado';
    }, [conversation]);

    return ( 
      <>
        <ProfileDrawer
          data={conversation}
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
        <div
          className={`
            w-full
            flex
            sm:px-4
            py-3
            px-4
            lg:px-6
            justify-between
            items-center
            shadow-sm
            ${styles.bgPrattle}`}
        >
          <div className="flex gap-3 items-center">
            <Link 
              className="
                lg:hidden
                block
                text-sky-500
                hover:text-sky-600
                transition
                cursor-pointer
              "
              href="/conversations"
            >
              <HiChevronLeft size={32} />
            </Link>
            {conversation.isGroup ? (
              <AvatarGroup users={conversation.users} />
            ) : (
              <Avatar user={otherUser} />
            )}
            <div className="flex flex-col">
              <div className="text-white">
                {conversation.name || otherUser.name}
              </div>
              <div
                className="
                  text-sm
                  font-light
                  text-neutral-400
                "
              >
                {statusText}
              </div>
            </div>
          </div>
          <HiEllipsisHorizontal
            size={32}
            onClick={() => setDrawerOpen(true)}
            className="
              text-sky-500
              cursor-pointer
              hover:text-sky-600
              transition
            "
          />
        </div>
      </>
     );
}
 
export default Header;