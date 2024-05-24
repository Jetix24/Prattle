import { useEffect, useState } from 'react';
import { NextPageContext } from "next";
import styles from "./dashboard.module.css";
import getCurrentUser from "@/app/actions/getCurrentUser";
import Navbar from "@/components/user/perfil/navbar/Navbar";
import UsersList from '@/components/dashboard/UsersList';
import getUsers from "../actions/getUsers";

async function DashboardPage() {
  const currentUser = await getCurrentUser();
  const users = await getUsers();

  return (
      <div className={`h-screen ${styles.bgPrattle}`}>
        <Navbar currentUser={currentUser!} />
        <div>
          <UsersList title="Nuevos usuarios" items={users}/>
        </div>
      </div>
  );
}

export default DashboardPage;