"use client";
import SettingsModal from "@/components/users/sidebar/SettingsModal";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { User } from "@prisma/client";
import { useState } from "react";

interface AccountMenuProps {
    visible?: boolean;
    currentUser: User;
}   

const AccountMenu: React.FC<AccountMenuProps> = ({ visible, currentUser }) => {
    if(!visible){ 
        return null;
    }
    
    const [isOpen, setIsOpen] = useState(false);

    return ( 
      <>
      <SettingsModal
          currentUser={currentUser}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
    <div className="rounded-lg w-44 absolute top-16 right-0 py-3 flex-col divide-gray-600 bg-gray-900 flex z-50">
        <ul className="py-2 text-sm text-gray-200" aria-labelledby="dropdownDividerButton">
          <li className=" sm:hidden block px-4 py-2 hover:bg-gray-600 hover:text-white cursor-pointer">
            <Link href="/conversations"> Chat </Link>
          </li>
          <li className=" block px-4 py-2 hover:bg-gray-600 hover:text-white cursor-pointer">
            <div onClick={() => setIsOpen(true)}> Configuración </div>
          </li>
        </ul>
        <div onClick={() => signOut({callbackUrl: '/'})} className="py-2 cursor-pointer block px-4 text-sm  hover:underline text-red-500">
          Cerrar Sesión
        </div>
    </div> 
    </>
);
}
 
export default AccountMenu;