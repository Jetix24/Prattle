"use client"

import Link from "next/link"
import styles from "./ButtonGoogle.module.css"
import {signIn, useSession, signOut} from 'next-auth/react';

const handleSignIn = async () => {
    await signIn('google', { callbackUrl: '/dashboard' }); // Llama a signIn con la callbackUrl '/dashboard'
};

export const ButtonGoogle = () => {
    return (
        <div className={styles.googleButton}>
            <button onClick={handleSignIn} className={styles.btn}>
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                <p>Ingresar con Google</p>
            </button>
        </div>
    )
}