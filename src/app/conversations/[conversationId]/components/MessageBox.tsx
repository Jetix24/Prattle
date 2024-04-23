"use client";

import { FullMessageType } from "@/app/types";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { useState } from "react";
import styles from "./MessageBox.module.css";
import Avatar from "@/components/users/Avatar";
import { format } from "date-fns";
import Image from "next/image";

interface MessageBoxProps {
    data: FullMessageType;
    isLast?: boolean;
  }
  
  const MessageBox: React.FC<MessageBoxProps> = ({
    data,
    isLast
  }) => {

    const session = useSession();
    const [imageModalOpen, setImageModalOpen] = useState(false);

    const isOwn = session?.data?.user?.email === data?.sender?.email; //Si el mensaje es propio (compara el email del usuario con el email del sender del mensaje)

    const seenList = (data.seen || []) //Lista de usuarios que han visto el mensaje
    .filter((user) => user.email !== data?.sender?.email)
    .map((user) => user.name)
    .join(', '); //La coma es para separar los nombres de los usuarios que han visto el mensaje

    const container =  clsx(
        styles.container,
        isOwn && styles.own
      );

    const avatar = clsx(
        isOwn && styles.avatar
    );

    const body =  clsx(
        styles.body,
        isOwn && styles.itemsend
    );

    const message = clsx(
        styles.message,
        isOwn ? styles.bgSky500 : styles.bgGray100,
        data.image ? styles.roundedMd : styles.roundedFull
      );
    

    return ( 
        <div className={container}>
            <div className={avatar}>
                <Avatar user={data.sender} />
            </div>
            <div className={body}>
                <div className={styles.info}>
                    <div className={styles.sender}>
                        {data.sender.name}
                    </div>
                    <div className={styles.time}>
                        {format(new Date(data.createdAt), 'p')}
                    </div>
                </div>
                <div className={message}>
                    {data.image ? (
                        <Image
                        onClick={() => setImageModalOpen(true)}
                        alt="Image"
                        height="288"
                        width="288"
                        src={data.image}
                        className={clsx(
                            styles.image,
                            styles.hoverScale
                        )}
                        />
                    ) : (
                    <div>{data.body}</div>
                    )}
                </div>
                {isLast && isOwn && seenList.length > 0 && (
                <div className={styles.seenText}>
                    {`Seen by ${seenList}`}
                </div>
                )}
            </div>
        </div>
     );
}
 
export default MessageBox;