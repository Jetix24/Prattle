"use client";

import { User } from "@prisma/client";

import Image from "next/image";
import styles from './Avatar.module.css';

interface AvatarProps {
    user?: User
}

const Avatar: React.FC<AvatarProps>= ({
    user
}) => {
    return ( 
        <div className={styles.container}>
            <div className={styles.inside}>
                <Image
                    fill
                    src={user?.image || '/img/placeholder.jpg'}
                    alt="Avatar"
                    />
            </div>
            <span className={styles.span} />
            </div>
     );
}
 
export default Avatar;