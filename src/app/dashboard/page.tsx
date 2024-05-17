import React from 'react';
import { ChatButton } from "@/components/shared/ChatButton";
import { SignOutButton } from "@/components/shared/SignOutButton";
import styles from "./dashboard.module.css";
import getCurrentUser from "@/app/actions/getCurrentUser";
import Navbar from "@/components/user/perfil/navbar/Navbar";


async function DashboardPage({ children }: {
  children: React.ReactNode,
}) {
  let currentUser;
  try {
      currentUser = await getCurrentUser();
  } catch (error) {
      console.error("Error al obtener el usuario actual:", error);
      // Aquí puedes manejar el error de la manera que consideres apropiada,
      // como mostrar un mensaje de error al usuario o redirigirlo a otra página.
  }

  return (
      <div className={styles.bgPrattle}>
          <Navbar currentUser={currentUser} />
          <h1>Felicidades</h1>
          <p>Estas dentro uwu</p>
          <SignOutButton />
          <ChatButton />
      </div>
  );
}

export default DashboardPage;