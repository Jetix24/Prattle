"use client";

import useOtherUser from "@/app/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import style from "./Header.module.css";
import { useMemo } from "react";
import Link from "next/link";
import { HiChevronLeft, HiEllipsisHorizontal } from "react-icons/hi2";
import Avatar from "@/components/users/Avatar";

interface HeaderProps {
    conversation: Conversation & {
      users: User[]
    }
  };

const Header: React.FC<HeaderProps> = ({
    conversation
}) => {
    const otherUser = useOtherUser(conversation);

    const statusText = useMemo(() => {
        if(conversation.isGroup) {
            return `${conversation.users.length} members`;
        }   

        return 'Active';
    }, [conversation]);

    return ( 
        <div className={style.header}>
            <div className={style.div}>
                <Link className={style.link} href="/conversations">
                    <HiChevronLeft size={32} />
                </Link>
                <Avatar user={otherUser} />
                <div className={style.userInfo}>
                    <div>
                        {conversation.name || otherUser.name}
                    </div>
                    <div className={style.status}>
                        {statusText}
                    </div>
                </div>
            </div>
            <HiEllipsisHorizontal size={32}  onClick={() => {}} className={style.ellipsis} />
        </div>
     );
}
 
export default Header;