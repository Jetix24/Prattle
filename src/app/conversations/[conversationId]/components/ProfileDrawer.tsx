"use client";

import useOtherUser from "@/app/hooks/useOtherUser";
import { Dialog, Transition } from "@headlessui/react";
import { Conversation, User } from "@prisma/client";
import { format } from "date-fns";
import { Fragment, useMemo, useState } from "react";
import styles from './ProfileDrawer.module.css';

interface ProfileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    data: Conversation & {
      users: User[]
    }
  }

const ProfileDrawer: React.FC<ProfileDrawerProps> = ({
    isOpen,
    onClose,
    data
  }) => {
    const otherUser = useOtherUser(data);

    const joinedDate = useMemo(() => {
        return format(new Date(otherUser.createdAt), 'PP');
    }, [otherUser.createdAt]);

    const title = useMemo(() => {
        return data.name || otherUser.name;
    }, [data.name, otherUser.name]);

    const statusText = useMemo(() => {
        if (data.isGroup) {
          return `${data.users.length} members`;
        }
    
        return 'Active';
    }, [data]);
    
    
    
    return ( 
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className={styles.dialogContainer} onClose={onClose}>
            <Transition.Child
            as={Fragment}
            enter={styles.easeout}
            enterFrom={styles.opacity0}
            enterTo={styles.opacity100}
            leave={styles.easein}
            leaveFrom={styles.opacity100}
            leaveTo={styles.opacity0}
          >
            <div className={styles.overlay} />
             </Transition.Child>
             <div className={styles.container}>
                <div className={styles.container2}>
                    <div className={styles.container3}>
                        <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-500"
                        leaveTo="translate-x-full"
                        >
                            
                        </Transition.Child>
                    </div>
                </div>
             </div>
            </Dialog>
        </Transition.Root>
    );
}
 
export default ProfileDrawer;