"use client";
import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import styles from './MobileFooter.module.css';
import MobileItem from "./MobileItem";

const MobileFooter = () => {
    const routes = useRoutes();
    const { isOpen } = useConversation();

    //Si una conversación está abierta, no se muestra el footer
    if (isOpen) {
        return null;
    }

    return ( 
        <div className={styles.container}>
            {routes.map((route) => (
                <MobileItem
                    key={route.label}
                    href={route.href} 
                    active={route.active} 
                    icon={route.icon}
                    onClick={route.onClick}
                />
            ))}
        </div>
     );
}
 
export default MobileFooter;