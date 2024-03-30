"use client";
import styles from "./logIn.module.css"
import Link from 'next/link';
import { ButtonGoogle } from '@/components/inicioSesion/ButtonGoogle/ButtonGoogle';
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { signIn } from 'next-auth/react';
import { toast } from "react-hot-toast";

export default function logIn() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const {
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => { //La data que se manda es el email y la contraseña del formulario por medio de la función onSubmit, toma los valores de
        setIsLoading(true);
        setError(null);
        
        signIn('credentials', {
            ...data,
            redirect: false,
        })
        .then((callback) => {
            if (callback?.error) {
                toast.error('Credentials are incorrect');
                toast.error(`Error: ${callback.error}`);
            }
            if (callback?.ok) {
                router.push('/dashboard');
            }
        }).catch((error) => {
            // Maneja el error aquí
            console.error(error);
            setError('Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo.');
            console.log('setError se ha llamado');
        });
        setIsLoading(false);
        
    };

    return (
        <section>
            <div className={styles.container}>
                <div className={styles.left}>
                </div>

                <div className={styles.right}>
                    <div className={styles.formContainer}> 
                        <div className={styles.logoContainer}>
                            <img src="/img/logo_seul.png" alt="Logo de la página"/>
                            <h2>Iniciar Sesión</h2>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className={styles.logInForm}>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Correo</label>
                                <div className={styles.inputIconContainer}>
                                    <input type="email" id="email" name="email" required placeholder="Ingresa tu correo"/>
                                    <img src="/icon/correo.png" alt="icon" className={styles.inputIcon} />
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="password">Contraseña</label>
                                <div className={styles.inputIconContainer}>
                                    <input type="password" id="password" name="password" required placeholder="Ingresa tu contraseña"/>
                                    <img src="/icon/bloquear.png" alt="icon" className={styles.inputIcon} />
                                </div>
                            </div>
                            <button type="submit" disabled={isLoading}>{isLoading ? 'Cargando...' : 'Ingresar'}</button>
                        </form>
                        <div className={styles.dividerContainer}>
                            <div className={styles.line}></div>
                            <span className={styles.orText}>o</span>
                            <div className={styles.line}></div>
                        </div>
                        <ButtonGoogle />
                        <div className={styles.loginPrompt}>
                            ¿Aún no tienes cuenta? {" "}
                            <Link href="/SignUp">
                                Registrate
                            </Link>
                        </div>
                        <div className={styles.footer}>
                            Al continuar, aceptas las condiciones del servicio
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
