"use client";

import React, { useEffect, useState } from "react";
import Modal from "../users/Modal";
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

  const calculateAge = (bornDate: Date) => {
    const today = new Date();
    let age = today.getFullYear() - bornDate.getFullYear();
    const monthDifference = today.getMonth() - bornDate.getMonth();
  
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < bornDate.getDate())) {
      age--;
    }
  
    return age;
  };

  const age = user?.bornDate ? `, ${calculateAge(new Date(user.bornDate))}` : '';

  return ( 
    <Modal isOpen={visible} onClose={onClose}>
      <div>
        <div className="h-40 overflow-hidden relative mr-4 mt-4 md:mr-0 md:mt-0">
          <Image alt="Portada" src={user?.cover || '/img/defaultcover.jpg'} layout="fill" />
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
                h-28
                w-28
                flex
                items-center
                mb-2
                border-8
                border-white
                "
          >
            <Image alt="Avatar" src={user?.image || '/img/placeholder.jpg'} layout="fill" />
          </div> 
        </div>
        <div className="">
          <div className="text-center px-14">
            <h2 className="text-gray-100 text-2xl md:text-3xl font-bold">
              {user?.name}{age}
            </h2>
            <h3 className="text-gray-400 mt-2">
              {user?.title || "Estoy usando Prattle"}
            </h3>
            <p className="mt-2 text-gray-500 text-sm">
              {user?.description || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default UserProfileModal;
