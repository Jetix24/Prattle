"use client";
import EmptyState from "@/components/users/EmptyState";
import styles from "./Users.module.css";

const Users = () => {
    return ( 
        <div className={styles.hola}>
            <EmptyState />
        </div>
     );
}
 
export default Users;