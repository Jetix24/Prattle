import React, { useCallback } from "react";
import { Interests, User } from '@prisma/client';
import Image from "next/image";

interface InterestCardProps {
    data: Interests;
    currentUser: User;
    onInterestChange: (id: string, isSelected: boolean) => void;
}

const InterestCard: React.FC<InterestCardProps> = ({ data, currentUser, onInterestChange }) => {
    const handleClick = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Interest ID:', data.id); // Imprime el ID del interés
        onInterestChange(data.id, event.target.checked);
        console.log('Depues de mandar la funcion:', data.id); 
    }, [data, onInterestChange]);

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 px-4 lg:px-0">
            <div className="flex justify-end px-4 pt-8"></div>
            <div className="flex flex-col items-center pb-10">
            <div className="relative">
                <div className="relative overflow-hidden w-40 h-24 mb-1">
                    <Image alt="Cover" src={data.cover || '/img/agregar.png'} fill />
                </div>
            </div>
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">{data.name}</h5>
                <div className="flex">
                    <input 
                        type="checkbox" 
                        onChange={handleClick} 
                        className="text-blue-700 rounded focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:focus:ring-blue-800"
                    />
                </div>
            </div>
        </div>
    );
};

export default InterestCard;
