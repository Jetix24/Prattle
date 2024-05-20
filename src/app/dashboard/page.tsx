import React, { useState, useEffect } from 'react';
import { ChatButton } from "@/components/shared/ChatButton";
import { SignOutButton } from "@/components/shared/SignOutButton";
import styles from "./dashboard.module.css";
import getCurrentUser from "@/app/actions/getCurrentUser";
import Navbar from "@/components/user/perfil/navbar/Navbar";

async function DashboardPage({ children }: {
  children: React.ReactNode,
}) {
  const currentUser = await getCurrentUser();

  return (
    <div className={styles.bgPrattle}>
      <Navbar currentUser={currentUser!} /> {/* Puedes pasar null o undefined mientras se carga */}
      <h1>Felicidades</h1>
      <p>Estás dentro uwu</p>
      <SignOutButton />
      <ChatButton />
      <main className={styles.main}>
            {children}
        </main>
    </div>
  );
}

export default DashboardPage;