"use client";
import Link from "next/link";
import styles from "./ChatButton.module.css"

export const ChatButton = () => {
    return (
        <Link className={styles.ChatButton} href="/users">Chat</Link>
    )
}