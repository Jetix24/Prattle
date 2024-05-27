import styles from "./dashboard.module.css";
import getCurrentUser from "@/app/actions/getCurrentUser";
import Navbar from "@/components/user/perfil/navbar/Navbar";
import UsersList from '@/components/dashboard/UsersList';
import getUsers from "../actions/getUsers";
import getUsersByInterest from '../actions/getUsersByInterest';
import getUsersWithoutInterests from '../actions/getUsersWithoutInterests';

async function DashboardPage() {
  const currentUser = await getCurrentUser();
  const users = await getUsers();
  const first10Users = users.slice(0, 10); // Obtener los primeros 10 usuarios
  const interestsWithUsers = await getUsersByInterest();
  const usersWithoutInterests = await getUsersWithoutInterests();

  return (
      <div className={`h-full ${styles.bgPrattle}`}>
        <Navbar currentUser={currentUser!} />
        <div>
          <UsersList title="Nuevos usuarios" items={first10Users}/>
          {interestsWithUsers.map((interest) => (
            <UsersList key={interest.id} title={interest.name} items={interest.users} />
          ))}
         <UsersList title="Usuarios sin intereses" items={usersWithoutInterests} /> 
        </div>
      </div>
  );
}

export default DashboardPage;
