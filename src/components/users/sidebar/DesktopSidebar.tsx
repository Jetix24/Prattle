"use client"

import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import styles from './DesktopSidebar.module.css';
import DesktopItem from "./DesktopItem";

const DesktopSidebar = () => {
    const routes = useRoutes();
    const [isOpen, setIsOpen] = useState(false);

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
        </div>
     );
}
 
export default DesktopSidebar;