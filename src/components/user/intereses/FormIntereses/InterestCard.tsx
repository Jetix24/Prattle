import React, { useCallback, useState } from "react";
import { Interests, User } from '@prisma/client';
import Image from "next/image";

interface InterestCardProps {
    data: Interests;
    currentUser: User;
    onInterestChange: (id: string, isSelected: boolean) => void;
}

const InterestCard: React.FC<InterestCardProps> = ({ data, onInterestChange }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement> | React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation();
        setIsChecked(prev => {
            const newChecked = !prev;
            onInterestChange(data.id, newChecked);
            return newChecked;
        });
    }, [data.id, onInterestChange]);

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-800 " onClick={handleClick}>
            <div className="flex justify-end"></div>
            <div className="flex flex-col items-center">
                <div className="relative overflow-hidden w-60 h-40 rounded-md">
                    <Image alt="Cover" src={data.cover || '/img/agregar.png'} layout="fill" objectFit="cover" className="w-full h-full mb-1"/>
                    <div className={`absolute inset-0 bg-black transition-opacity duration-200 ${isChecked ? 'opacity-20' : 'opacity-70'}`}></div>
                    <h5 className="absolute bottom-0 left-0 text-xl font-medium text-white">{data.name}</h5>
                </div>
            </div>
                <div className="flex">
                    <input 
                        type="checkbox" 
                        onChange={handleClick} 
                        checked={isChecked}
                        className="hidden"
                    />
                </div>
            </div>
    );
};

export default InterestCard;
