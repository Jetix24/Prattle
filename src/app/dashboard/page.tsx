import React, { useState, useEffect } from 'react';
import { ChatButton } from "@/components/shared/ChatButton";
import { SignOutButton } from "@/components/shared/SignOutButton";
import styles from "./dashboard.module.css";
import getCurrentUser from "@/app/actions/getCurrentUser";
import Navbar from "@/components/user/perfil/navbar/Navbar";
import UsersList from '@/components/dashboard/UsersList';
import getUsers from "../actions/getUsers";

async function DashboardPage() {
  const currentUser = await getCurrentUser();
  const users = await getUsers();

  return (
    <div className={styles.bgPrattle}>
      <Navbar currentUser={currentUser!} /> {/* Puedes pasar null o undefined mientras se carga */}
      <div>
        <UsersList title="Nuevos usuarios" items={users}/>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default DashboardPage;