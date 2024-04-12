import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import axios from "axios";
import Avatar from "@/components/users/Avatar";
import styles from "./UserBox.module.css";

interface UserBoxProps {
    data: User;
}

const UserBox: React.FC<UserBoxProps> = ({
    data
}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = useCallback(() => {
        setIsLoading(true);
    
        axios.post('/api/conversations', { 
            userId: data.id 
        })
        .then((data) => {
            setIsLoading(false);
            router.push(`/conversations/${data.data.id}`);
        })
        .finally(() => setIsLoading(false));
    }, [data, router]);

    return (
        <div onClick={handleClick} className={styles.userbox}>
            <Avatar user={data} />
            <div className={styles.info}>
            <div className={styles.div}>
            <div className={styles.inside}>
              <p className={styles.text}>
                {data.name}
              </p>
            </div>
          </div>
            </div>
        </div>
    );
};

export default UserBox;