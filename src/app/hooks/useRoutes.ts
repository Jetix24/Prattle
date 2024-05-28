import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiChat} from 'react-icons/hi';
import {  HiUsers } from 'react-icons/hi2';
import { FaHome } from "react-icons/fa";
import useConversation from "./useConversation";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(() => [
    {
      label: 'Dashboard', 
      href: '/dashboard',
      icon: FaHome, 
    },
    { 
      label: 'Chat', 
      href: '/conversations', 
      icon: HiChat,
      active: pathname === '/conversations' || !!conversationId
    },
    { 
      label: 'Friends', 
      href: '/friends', 
      icon: HiUsers, 
      active: pathname === '/friends'
    }
    
  ], [pathname, conversationId]);

  return routes;
};

export default useRoutes;