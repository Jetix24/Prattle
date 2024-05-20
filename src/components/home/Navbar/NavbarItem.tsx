import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css';

interface NavbarItemProps {
    href: string;
    label: string;  
}

const NavbarItem: React.FC<NavbarItemProps> = ({
    href,
    label
}) => {
    if (href.startsWith('/si')) {
        return (
            <Link href="/signup" className={styles.registrate}>
                {label}
            </Link>
        )
    } else{
    return ( 
    <div className="text-white cursor-pointer hover:text-gray-300 transition flex justify-center items-center text-xl font-medium ">
        <Link href={href}>
            {label}
        </Link>
    </div> );
    }
}
 
export default NavbarItem;
