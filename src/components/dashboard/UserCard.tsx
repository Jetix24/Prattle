"use client";
import React from "react";
import {User} from "@prisma/client";
import Image from "next/image";

import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "./UserList.module.css";
import { useCallback, useState } from "react";
import Avatar from "@/components/users/Avatar";
import LoadingModal from "@/components/users/LoadingModal";
import useActiveList from "@/app/hooks/useActiveList";

import UserProfileModal from '@/components/dashboard/UserProfileModal';
import useUserProfileModal from "@/app/hooks/useUserProfileModal";

interface UserCardProps {
    data: User;
}

const UserCard: React.FC<UserCardProps> = ({
    data
}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const { openModal } = useUserProfileModal();
    const { isOpen, closeModal} = useUserProfileModal();

    const { members } = useActiveList();
    const isActive = members.indexOf(data?.email!) !== -1;

    const handleClick = useCallback(() => {
        setIsLoading(true);

        axios.post('/api/conversations', { 
        userId: data.id
        })
        .then((data) => {
        router.push(`/conversations/${data.data.id}`);
        })
        .finally(() => setIsLoading(false));
    }, [data, router]);

    return ( 
        <>
        {isLoading && (
        <LoadingModal />
      )}
      <UserProfileModal visible={isOpen} onClose={closeModal}/>
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 px-4 lg:px-0">
        <div className="flex justify-end px-4 pt-8">
        </div>
        <div className="flex flex-col items-center pb-10">
        <div className="relative"> 
            <div className="relative overflow-hidden w-24 h-24 mb-3 rounded-full ">
               <Image alt="Avatar" src={data?.image || '/img/placeholder.jpg'} fill /> 
            </div> 
            {isActive && (
            <span
              className="
                absolute
                block
                rounded-full
                bg-green-500
                ring-2
                ring-white
                top-0
                right-0
                h-4
                w-4
                md:h-5
                md:w-5
              "
            />
          )} 
        </div>
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{data.name}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">{data?.title || "Estoy usando Prattle"}</span>
            <div className="flex mt-4 md:mt-6">
                <button onClick={handleClick} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Mensajear</button>
                <button onClick={() => openModal(data)} className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Ver perfil</button>
            </div>
        </div>
    </div> 
    </>
);
}
 
export default UserCard;