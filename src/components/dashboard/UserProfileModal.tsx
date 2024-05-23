"use client";

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Modal from "../users/Modal";
import useOtherUser from "@/app/hooks/useOtherUser";
import { format } from "date-fns";
import Avatar from "../users/Avatar";
import { IoTrash } from "react-icons/io5";
import useUserProfileModal from "@/app/hooks/useUserProfileModal";
import Image from "next/image";


interface UserProfileModalProps {
  visible?: boolean;
  onClose?: any;
}

const UserProfileModal: React.FC<UserProfileModalProps> = ({
  visible,
  onClose
}) => {
  const [isVisible, setIsVisible] = useState(!!visible);
  const { user } = useUserProfileModal();
  
  return ( 
    <Modal isOpen={visible} onClose={onClose}>
        <div>
            <div className="h-40 overflow-hidden relative" >
              <Image alt="Portada" src={user?.cover || '/img/defaultcover.jpg'} fill/>
            </div>
            <div className="flex justify-center px-5 -mt-20">
              <div className="
                    relative
                    rounded-full
                    overflow-hidden
                    bg-white 
                    p-2
                    mx-5
                    md:h-32
                    md:w-32
                    flex
                    items-center
                    mb-2
                    border-8
                    border-white
                    "
                    >
                <Image alt="Avatar" src={user?.image || '/img/placeholder.jpg'} fill/>
              </div> 
            </div>
            <div className=" ">
                <div className="text-center px-14">
                    <h2 className="text-gray-100 text-3xl font-bold">{user?.name}</h2>
                    <h3 className="text-gray-400 mt-2" >{user?.title || "Estoy usando Prattle"}</h3>
                    <p className="mt-2 text-gray-500 text-sm"> {user?.description || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "} </p>
                </div>

            </div>
          </div>

    </Modal>
   );
}
 
export default UserProfileModal;