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
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]); // Cambiado a string[]
    const router = useRouter();

    const handleInterestChange = useCallback((interestId: string, isSelected: boolean) => {
        console.log('Interest ID:', interestId, 'Is Selected:', isSelected); // Imprime el ID del interés y si está seleccionado
    
        if (interestId) {
            setSelectedInterests(prevInterests => {
                const newInterests = isSelected ? [...prevInterests, interestId] : prevInterests.filter(id => id !== interestId);
                console.log('Estos son los intereses',newInterests); // Aquí se imprime el nuevo estado
                return newInterests;
            });
        }
    }, []);

    const handleSave = useCallback(async () => {
        console.log('Intereses seleccionados:', selectedInterests);
        
        await axios.post('/api/userInterest', {
            userId: currentUser.id,
            interests: selectedInterests
        });
        router.push('/dashboard');
    }, [selectedInterests, router, currentUser.id]);

    return (
        <div className="px-4 md:px-12 mt-4 space-y-8 mb-20">
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {interest.map((interest) => (
                        <div key={interest.id} className="flex-none lg:w-72 w-64">
                            <InterestCard 
                            data={interest} 
                            currentUser={currentUser} 
                            onInterestChange={handleInterestChange} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="fixed bottom-0 left-0 right-0 w-full bg-white flex justify-center">
                <button onClick={handleSave} className="w-1/2 mt-4 bg-blue-500 text-white rounded px-4 py-2">Guardar</button>
            </div>
        </div>
    );
}

export default FormIntereses;