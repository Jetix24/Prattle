import Link from "next/link";
import clsx from "clsx";
import React from "react"; // Asegúrate de importar React

interface DesktopItemProps {
  label: string;
  icon: any; // El tipo podría ser más específico, como React.ReactNode o una combinación de tipos para imágenes y componentes
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const DesktopItem: React.FC<DesktopItemProps> = ({ 
  label, 
  href, 
  icon, // Se elimina la desestructuración a Icon para manejar tanto componentes como imágenes
  active,
  onClick
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  // Verifica si el icono es una cadena (URL de imagen) o un componente de React
  const isIconUrl = typeof icon === 'string';

  return ( 
    <li onClick={handleClick}>
      <Link 
        href={href}
        className={clsx(`
          group
          flex
          gap-x-3
          rounded-md
          p-3
          text-sm
          leading-6
          font-semibold
          text-gray-500
          hover:text-slate-900
          hover:bg-slate-700
        `,
          active && 'bg-slate-600 text-slate-900'
        )}
      >
        {isIconUrl ? (
          // Si 'icon' es una URL de imagen, renderiza un elemento <img>
          <img src={"/img/logo_seul.png"} alt={label} className="h-6 w-6 shrink-0" />
        ) : (
          // Si 'icon' es un componente de React, lo renderiza
          React.createElement(icon, { className: "h-6 w-6 shrink-0" })
        )}

        <span className="sr-only">{label}</span>
      </Link>
    </li>
   );
}
export default DesktopItem;