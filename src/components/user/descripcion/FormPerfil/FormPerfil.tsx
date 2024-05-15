"use client";
import { User } from "@prisma/client";
import styles from "./FormPerfil.module.css"
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface FormPerfilProps {
  currentUser: User;
}

export const FormPerfil = ({ currentUser }: FormPerfilProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const [router, setRouter] = useState(useRouter());

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        }
    } = useForm({
        defaultValues: {
            name: currentUser?.name,
            image: currentUser?.image
        }
    });

    const image = watch('image');

    const handleUpload = (result: any) => {
        setValue('image', result?.info?.secure_url, {
            shouldValidate: true
        })
    }

    /*const age = differenceInYears(new Date(), new Date(currentUser.bornDate)); */ 

    return (
        <div className={styles.perfilForm}>
            <div className={styles.nombreGroup}>
                <label id="nombre">{currentUser.name}</label>
            </div>
            <div className={styles.imgGroup}>
                <img src={currentUser.image ?? ""} alt="icon" className={styles.imgPerfil}/> {/* Asegúrate de que 'image' es un campo en tu objeto User */}
            </div>
            <div className={styles.edadGroup}>
                <label>Edad: {" "}</label>
                <label id="edad">21</label> {/* Asegúrate de que 'age' es un campo en tu objeto User */}
            </div>
        </div>
    )
}