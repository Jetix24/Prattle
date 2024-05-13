"use client";

import Link from "next/link";
import styles from "./MobileItem.module.css";
import React from "react"; // Asegúrate de importar React

interface MobileItemProps {
    href: string;
    icon: any;
    active?: boolean;
    onClick?: () => void;
  }
  
  const MobileItem: React.FC<MobileItemProps> = ({ 
    href, 
    icon, 
    active,
    onClick
  }) => {
    const handleClick = () => {
      if (onClick) {
        return onClick();
      }
    };

    const isIconUrl = typeof icon === "string";
  
    return ( 
      <Link 
        onClick={handleClick} 
        href={href} 
        className={`${styles.container} ${active && styles.active}`} >
        {isIconUrl ? (
          // Si 'icon' es una URL de imagen, renderiza un elemento <img>
          <img src={"/img/logo_seul.png"}  className="h-6 w-6 shrink-0" />
        ) : (
          // Si 'icon' es un componente de React, lo renderiza
          React.createElement(icon, { className: "h-6 w-6 shrink-0" })
        )}

      </Link>
     );
  }
 
export default MobileItem;