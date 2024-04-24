"use client";

import useOtherUser from "@/app/hooks/useOtherUser";
import { Dialog, Transition } from "@headlessui/react";
import { Conversation, User } from "@prisma/client";
import { format } from "date-fns";
import { Fragment, useMemo, useState } from "react";
import styles from './ProfileDrawer.module.css';
import { IoClose, IoTrash } from "react-icons/io5";
import Avatar from "@/components/users/Avatar";

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
                        enter={styles.easeinout}
                        enterFrom={styles.translateXFull}
                        enterTo={styles.translateX}
                        leave={styles.easeinout}
                        leaveTo={styles.translateXFull}
                        >
                          <Dialog.Panel className={styles.panel}>
                            <div className={styles.header}>
                              <div className={styles.header1} >
                                <div className={styles.header2}>
                                  <div className={styles.header3}>
                                    <button
                                      type="button"
                                      className={styles.exit}
                                      onClick={onClose}
                                    >
                                      <span className={styles.srOnly}>Close panel</span>
                                      <IoClose size={24} />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.header4}>
                                <div className={styles.header5}>
                                  <div className={styles.header6}>
                                      <Avatar user={otherUser} />
                                  </div>
                                  <div>
                                    {title}
                                  </div>
                                  <div className={styles.statusText}>
                                    {statusText}
                                  </div>
                                  <div className={styles.header7}>
                                    <div onClick={() => {}} className={styles.header8}>
                                      <div className={styles.header9}>
                                        <IoTrash size={20} />
                                      </div>
                                      <div className={styles.header10}>
                                        Delete
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.header11}>
                                    <dl className={styles.header12}>
                                    {data.isGroup && (
                                      <div>
                                        <dt className={styles.email}>
                                          Emails
                                        </dt>
                                        <dd className={styles.emails}>
                                          {data.users.map((user) => user.email).join(', ')}
                                        </dd>
                                      </div>
                                      )}
                                      {!data.isGroup && (
                                        <div>
                                          <dt
                                            className={styles.email}>
                                            Email
                                          </dt>
                                          <dd className={styles.emails}>
                                            {otherUser.email}
                                          </dd>
                                        </div>
                                      )}
                                      {!data.isGroup && (
                                      <>
                                        <hr />
                                        <div>
                                          <dt
                                            className={styles.email}>
                                            Joined
                                          </dt>
                                          <dd
                                            className={styles.emails}>
                                            <time dateTime={joinedDate}>
                                              {joinedDate}
                                            </time>
                                          </dd>
                                        </div>
                                      </>
                                    )}
                                    </dl>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
             </div>
            </Dialog>
        </Transition.Root>
    );
}
 
export default ProfileDrawer;