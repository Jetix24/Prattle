"use client";

import { User } from "@prisma/client";
import styles from "./UserList.module.css";
import UserBox from "./UserBox";
import React from "react";

interface UserListProps {
    items: User[];
}

const UsersList: React.FC<UserListProps> = ({
    items
}) => {
    return ( 
        <aside className={styles.aside}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <div className={styles.people}>
                        People
                    </div>
                </div>
                {items.map((item) => (
                    <UserBox
                        key={item.id}
                        data={item}
                    />
                ))}
            </div>
        </aside>
     );
}
 
export default UsersList;