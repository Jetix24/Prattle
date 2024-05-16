"use client";
import { ChatButton } from "@/components/shared/ChatButton";
import { SignOutButton } from "@/components/shared/SignOutButton";

import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import {User} from "@prisma/client";
import { useRouter } from "next/navigation";
import { useForm, FieldValues } from 'react-hook-form';

interface DashboardProps {
  currentUser: User;
}

const DashboardPage: React.FC<DashboardProps> = ({
    currentUser
}) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },

  } = useForm<FieldValues>({
    defaultValues: {
      name: currentUser?.name,
      email: currentUser?.email,
    }
  });

    return (
      <div>
        <h1>Felicidades {currentUser?.name} w </h1>
        <p>Estas dentro uwu </p>
        <SignOutButton />
        <ChatButton />
      </div>
    );
  }
  
  export default DashboardPage;