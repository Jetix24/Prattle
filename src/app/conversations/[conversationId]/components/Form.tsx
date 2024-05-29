"use client";

import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import styles from "./Form.module.css";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";
import { CldUploadButton } from "next-cloudinary";
import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import AIassistantModal from "./AIassistantModal";

interface FormProps {
  otherUserId: string; // Añadir otherUserId como prop
}

const Form: React.FC<FormProps> = ({ otherUserId }) => {
  const { conversationId } = useConversation();
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { message: '' }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue('message', '', { shouldValidate: true });
    
    axios.post('/api/messages', {
      ...data,
      conversationId
    });
  };

  const handleUpload = (result: any) => {
    axios.post('/api/messages', {
      image: result?.info?.secure_url,
      conversationId
    });
  };

  return ( 
    <>
      <AIassistantModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        otherUserId={otherUserId} // Pasar otherUserId a AIassistantModal
      />
      <div className={`py-4 px-4 flex items-center gap-2 lg:gap-4 w-full ${styles.bgPrattle}`}>
        <CldUploadButton options={{ maxFiles: 1 }} onUpload={handleUpload} uploadPreset="ft70nulr">
          <HiPhoto size={30} className="text-sky-500" />
        </CldUploadButton>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="rounded-full p-2 cursor-pointer hover:bg-neutral-200 transition flex items-center justify-center bg-white"
        >
          <img src={"/img/logo_seul.png"} className="h-5 w-5 shrink-0" />
        </button>
        <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2 lg:gap-4 w-full">
          <MessageInput
            placeholder="Escribe tu mensaje aquí"
            id="message"
            type="text"
            required={true}
            register={register}
            errors={errors}
          />
          <button
            type="submit"
            className={`rounded-full p-2 cursor-pointer hover:bg-sky-500 transition ${styles.bluePrattle}`}
          >
            <HiPaperAirplane size={18} className="text-white" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
