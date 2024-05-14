"use client";

import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import styles from "./MessageInput.module.css";

interface MessageInputProps {
  placeholder: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  value?: string; // Añade esta línea
}

const MessageInput: React.FC<MessageInputProps>= ({
    placeholder,
    id,
    type,
    required,
    register,
    errors,
    value // Añade esta línea
}) => {
    return ( 
    <div className="relative w-full">
        <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        value={value} // Añade esta línea
        className="
        text-black
        font-light
        py-2
        px-4
        bg-neutral-100
        w-full
        rounded-full
        focus:outline-none
      "
    />
  </div>);
}
 
export default MessageInput;