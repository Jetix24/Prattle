"use client";

import styles from "./page.module.css";
import clsx from "clsx";

import useConversation from "../hooks/useConversation";
import EmptyState from "src/components/users/EmptyState";

const Home = () => {
  const { isOpen } = useConversation();

  return (
    <div className={clsx(
        styles.page,
        { [styles.block]: isOpen },
        { [styles.hidden]: !isOpen }
      )}>
      <EmptyState />
    </div>
  )
};

export default Home;