"use client"

import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import DesktopItem from "./DesktopItem";

import {User} from "@prisma/client";
import Avatar from "../Avatar";
import SettingsModal from "./SettingsModal";
import Image from "next/image";

interface DesktopSidebarProps {
    currentUser: User
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = (
    {currentUser}
) => {
    const routes = useRoutes();
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <SettingsModal
          currentUser={currentUser}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
        <div
          className="
            hidden
            lg:fixed
            lg:inset-y-0
            lg:left-0
            lg:z-40
            lg:w-20
            lg:overflow-y-auto
            lg:bg-slate-900
            lg:border-r-[1px]
            border-slate-800
            lg:pb-4
            lg:flex
            lg:flex-col
          "
        >
          <div
            className="
            py-4
            flex
            items-center
            justify-center   
            w-full
            h-50        
            "
          >
            <Image
              src="/img/logo_seul.png"
              alt="Logo"
              width={50}
              height={50}
            />
          </div>
          <hr className="w-full border-slate-600" />
          <nav
            className="
              mt-4
              flex
              flex-col
              justify-between
            "
          >
            <ul
              role="list"
              className="
                flex
                flex-col
                items-center
                space-y-1
              "
            >
              {routes.map((item) => (
                <DesktopItem
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  icon={item.icon}
                  active={item.active}
                />
              ))}
            </ul>
          </nav>
          <nav
            className="
              mt-4
              flex
              flex-col
              justify-between
              items-center
              h-96
            "
          >
            <div
              onClick={() => setIsOpen(true)}
              className="
                cursor-pointer
                hover:opacity-75
                transition
                mt-auto
              "
            >
              <Avatar user={currentUser} />
            </div>
          </nav>
        </div>
      </>
     );
}
 
export default DesktopSidebar;