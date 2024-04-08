import Sidebar from "@/components/users/sidebar/Sidebar";

export default async function UsersLayout({
    children
  }: {
    children: React.ReactNode,
  }) {
  
    return (
      <Sidebar>
        <div className="h-full">
          {children}
        </div>
      </Sidebar>
    );
  }