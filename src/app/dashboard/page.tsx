import { useEffect, useState } from 'react';
import styles from "./dashboard.module.css";
import getCurrentUser from "@/app/actions/getCurrentUser";
import Navbar from "@/components/user/perfil/navbar/Navbar";
import UsersList from '@/components/dashboard/UsersList';
import getUsers from "../actions/getUsers";
import getUsersByInterest from '../actions/getUsersByInterest';

async function DashboardPage() {
  const currentUser = await getCurrentUser();
  const users = await getUsers();
  const interestsWithUsers = await getUsersByInterest();

  return (
      <div className={`h-full ${styles.bgPrattle}`}>
        <Navbar currentUser={currentUser!} />
        <div>
          <UsersList title="Nuevos usuarios" items={users}/>
          {interestsWithUsers.map((interest) => (
            <UsersList key={interest.id} title={interest.name} items={interest.users} />
          ))}
        </div>
      </div>
  );
}

export default DashboardPage;
