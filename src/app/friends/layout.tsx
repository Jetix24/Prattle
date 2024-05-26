import Sidebar from "@/components/users/sidebar/Sidebar";
import UsersList from "./components/UserList";
import getFriends from "../actions/getFriends";

export default async function UsersLayout({
    children
  }: {
    children: React.ReactNode,
  }) {
    const users = await getFriends();

    return (
      <Sidebar>
        <div className="h-full">
          <UsersList items={users} />
          {children}
        </div>
      </Sidebar>
    );
  }