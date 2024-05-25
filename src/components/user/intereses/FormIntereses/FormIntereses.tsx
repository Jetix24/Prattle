"use client";
import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import InterestCard from './InterestCard';
import { User, Interests } from '@prisma/client';
import styles from "./FormIntereses.module.css";

interface FormInteresesProps {
    currentUser: User;
    interest: Interests[];
}

const FormIntereses: React.FC<FormInteresesProps> = ({ currentUser, interest }) => {
    const [selectedInterests, setSelectedInterests] = useState<number[]>([]);
    const router = useRouter();

    const handleInterestChange = useCallback((interestId: number, isSelected: boolean) => {
        setSelectedInterests(prevInterests =>
            isSelected ? [...prevInterests, interestId] : prevInterests.filter(id => id !== interestId)
        );
    }, []);

    const handleSave = useCallback(async () => {
        await axios.post('/api/userInterest', {
            userId: currentUser.id,
            interests: selectedInterests
        });
        router.push('/dashboard');
    }, [selectedInterests, router, currentUser.id]);

    return (
        <div className="px-4 md:px-12 mt-4 space-y-8 bg-blue-500">
            <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
                    Que hubo knmfdslkfnsdlkfnsdlkfnlksd
                </p>
                <div>
                    <div className="overflow-x-auto scrollbar scrollbar-track-slate-700 scrollbar-thumb-slate-600 ">
                        <div className="flex space-x-4 mb-2">
                            {interest.map((interest) => (
                                <div key={interest.id} className="flex-none lg:w-72 w-64">
                                    <InterestCard data={interest} currentUser={currentUser} onInterestChange={handleInterestChange} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <button onClick={handleSave} className="mt-4 bg-blue-500 text-white rounded px-4 py-2">Guardar</button>
        </div>
    );
};

export default FormIntereses;
