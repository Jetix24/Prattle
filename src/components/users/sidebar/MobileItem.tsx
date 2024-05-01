"use client";

import Link from "next/link";
import styles from "./MobileItem.module.css";

interface MobileItemProps {
    href: string;
    icon: any;
    active?: boolean;
    onClick?: () => void;
  }
  
  const MobileItem: React.FC<MobileItemProps> = ({ 
    href, 
    icon: Icon, 
    active,
    onClick
  }) => {
    const handleClick = () => {
      if (onClick) {
        return onClick();
      }
    };
  
    return ( 
      <Link 
        onClick={handleClick} 
        href={href} 
        className={`${styles.container} ${active && styles.active}`} >
        <Icon className={styles.item} />
      </Link>
     );
  }
 
export default MobileItem;