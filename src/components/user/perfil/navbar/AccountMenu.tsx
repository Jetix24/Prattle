"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

interface AccountMenuProps {
    visible?: boolean;
}   

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
    if(!visible){ 
        return null;
    }

    return ( 
    <div className="rounded-lg w-44 absolute top-16 right-0 py-3 flex-col divide-gray-600 bg-gray-900 flex z-50">
        <ul className="py-2 text-sm text-gray-200" aria-labelledby="dropdownDividerButton">
          <li className=" lg:hidden block px-4 py-2 hover:bg-gray-600 hover:text-white cursor-pointer">
            <Link href="/conversations"> Chat </Link>
          </li>
          <li className=" block px-4 py-2 hover:bg-gray-600 hover:text-white cursor-pointer">
            <Link href="/conversations"> Configuración </Link>
          </li>
        </ul>
        <div onClick={() => signOut({callbackUrl: '/'})} className="py-2 cursor-pointer block px-4 text-sm  hover:underline text-red-500">
          Cerrar Sesión
        </div>
    </div> 
);
}
 
export default AccountMenu;