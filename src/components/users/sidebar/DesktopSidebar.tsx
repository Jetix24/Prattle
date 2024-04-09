"use client"

import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import styles from './DesktopSidebar.module.css';
import DesktopItem from "./DesktopItem";

import {User} from "@prisma/client";
import Avatar from "../Avatar";

interface DesktopSidebarProps {
    currentUser: User
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = (
    {currentUser}
) => {
    const routes = useRoutes();
    const [isOpen, setIsOpen] = useState(false);

    console.log({currentUser});

    return ( 
        <div className={styles.container}>
            <nav className={styles.navigation}>
            <ul role="list" className={styles.list}>
            {routes.map((item) => (
              <DesktopItem
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={item.active}
                onClick={item.onClick}
              />
            ))}
          </ul>
            </nav>
            <nav className={styles.nav}>
              <div onClick={() => setIsOpen(true)} className={styles.avatar}>
                <Avatar user={currentUser} />
              </div>
            </nav>
        </div>
     );
}
 
export default DesktopSidebar;