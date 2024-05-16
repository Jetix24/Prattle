import getCurrentUser from "@/app/actions/getCurrentUser";
import { ChatButton } from "@/components/shared/ChatButton";
import { SignOutButton } from "@/components/shared/SignOutButton";
import useRoutes from "@/app/hooks/useRoutes";
import {User} from "@prisma/client";

async function DashboardPage({ children }: {
  children: React.ReactNode,
}) {
  const currentUser = await getCurrentUser();
  
  return (
    <div>
      <h1>Felicidades {currentUser?.name} ee </h1>
      <p>Estas dentro uwu </p>
      <SignOutButton />
      <ChatButton />
    </div>
  )
}

export default DashboardPage;