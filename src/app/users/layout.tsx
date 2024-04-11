import Sidebar from "@/components/users/sidebar/Sidebar";
import getUsers from "../actions/getUsers";
import UsersList from "./components/UserList";

export default async function UsersLayout({
    children
  }: {
    children: React.ReactNode,
  }) {
    const users = await getUsers();

    return (
      <Sidebar>
        <div className="h-full">
          <UsersList items={users} />
          {children}
        </div>
      </Sidebar>
    );
  }