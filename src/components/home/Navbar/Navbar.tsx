"use client";
import Link from "next/link"
import styles from "./Navbar.module.css"
import NavbarItem from "./NavbarItem"
import { IoMenu } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import { useCallback, useState } from "react";


export const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, []);

return (
    <nav className= "w-full fixed top-0">
        <div className={`flex justify-between md:px-16 py-3 flex-row items-center transition duration-500 bg-opacity-90 ${styles.navBG}`}>
            <Link href="/"> 
                <img src="/img/logo_blanc.png" className={styles.logo} alt="Logo" />
            </Link>
            <div className="flex-row ml-8 gap-7 hidden justify-end lg:flex ">
                <NavbarItem href="#proyecto" label="Proyecto" />
                <NavbarItem href="#nosotros" label="Sobre nosotros" />
                <NavbarItem href="/login" label="Iniciar sesión" />
                <NavbarItem href="/signup" label="Registrate" />
            </div>
            <div onClick={toggleMobileMenu} className="lg:hidden flex-row items-center gap-2 ml-8 cursor-pointer relative " style={{ marginRight: '5%' }}>
                <IoMenu className="text-white transition" size={50}/>
                <MobileMenu visible={showMobileMenu}/>
            </div>
        </div>
    </nav>
    )
}
