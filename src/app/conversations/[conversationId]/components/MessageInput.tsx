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
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const aiMessageInput = (message: string) => {
  const inputElement = document.getElementById('message') as HTMLInputElement | null;
  if (inputElement) {
    inputElement.value = message;
    inputElement.dispatchEvent(new Event('change', { bubbles: true }));
  }
}

const MessageInput: React.FC<MessageInputProps>= ({
    placeholder,
    id,
    type,
    required,
    register,
    errors,
    value, // Añade esta línea
    onChange, // Añade esta línea
}) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

    return ( 
    <div className="relative w-full">
        <input
        id={id}
        type={type}
        autoComplete="off"
        {...register(id, { required })}
        placeholder={placeholder}
        value={value} // Value sirve para mostrar el mensaje en el input
        onChange={handleChange}
        className="
        text-black
        font-light
        py-2
        px-4
        bg-neutral-100
        w-full
        rounded-full
        focus:outline-none
      "/>
  </div>);
}
 
export default MessageInput;