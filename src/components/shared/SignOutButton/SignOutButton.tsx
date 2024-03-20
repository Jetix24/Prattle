"use client"
import styles from "./SignOutButton.module.css"
import { signOut } from "next-auth/react"

export const SignOutButton = () => {
    return (
        <button onClick={() => signOut({callbackUrl: '/'})} className={styles.signOutButton}>
            Sign Out
        </button>
    )
}