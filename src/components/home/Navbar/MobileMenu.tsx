import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css';

interface MobileMenuProps {
    visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({visible}) => {
    if (!visible) {
        return ( null );
    }

    return(
        <div className={`${styles.bgPrattleclear} w-56 absolute top-8 right-2 py-5 flex-col`}>
            <div className='flex flex-col gap-4'>
                <Link href="#proyecto" className='px-3 text-center text-white hover:underline cursor-pointer'>
                    Proyecto
                </Link>
                <Link href="#nosotros" className='px-3 text-center text-white hover:underline cursor-pointer'>
                    Sobre nosotros
                </Link>
                <Link href="/login" className='px-3 text-center text-white hover:underline cursor-pointer'>
                    Iniciar sesión
                </Link>
                <Link href="/signup" className={styles.registrate}>
                    Registrate
                </Link>
            </div>            
        </div>
    )
}
 
export default MobileMenu;