import styles from "./DesktopItem.module.css";
import Link from "next/link";

interface DesktopItemProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const DesktopItem: React.FC<DesktopItemProps> = ({ 
  label, 
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
    <li onClick={handleClick} key={label} style={{ listStyle: 'none' }}>
      <Link
        href={href}
        className={`${styles.link} ${active && styles.active}`} 
      >
        <Icon className={styles.item} aria-hidden="true" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
   );
}
 
export default DesktopItem;