"use client";

import styles from "./page.module.css";
import clsx from "clsx";

import useConversation from "../hooks/useConversation";
import EmptyState from "src/components/users/EmptyState";

const Home = () => {
  const { isOpen } = useConversation();

  return (
    <div
      className={clsx(
        "lg:pl-80 h-full lg:block",
        isOpen ? 'block' : 'hidden'
      )}
    >
      <EmptyState />
    </div>
  )
};

export default Home;