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

const Form = () => {

    const { conversationId } = useConversation();
    const routes = useRoutes();
    const [isOpen, setIsOpen] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        formState: {
          errors,
        }
      } = useForm<FieldValues>({
        defaultValues: {
          message: ''
        }
      });

      const onSubmit: SubmitHandler<FieldValues> = (data) => { //Esta funcion se ejecuta cuando se envia el formulario
        setValue('message', '', { shouldValidate: true }); //Se limpia el campo de texto
        
        axios.post('/api/messages', { //Aqui se envia el mensaje
          ...data,
          conversationId
        })
      };

      const handleUpload = (result: any) => { //Esta funcion se ejecuta cuando se sube una imagen
        axios.post('/api/messages', {
          image: result?.info?.secure_url,
          conversationId
        })
      }

      return ( 
        <>
        <AIassistantModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
        <div
          className={`py-4 px-4 flex items-center gap-2 lg:gap-4 w-full ${styles.bgPrattle}`}
        >
          <CldUploadButton
            options={{ maxFiles: 1 }}
            onUpload={handleUpload}
            uploadPreset="ft70nulr"
          >
            <HiPhoto size={30} className="text-sky-500" />
          </CldUploadButton>
          <button
              type="submit"
              onClick={() => setIsOpen(true)}
              className={`
                rounded-full
                p-2
                cursor-pointer
                hover:bg-neutral-200
                transition
                flex
                items-center
                justify-center
                bg-white`}
            >
              <img src={"/img/logo_seul.png"} className="h-5 w-5 shrink-0" />
            </button>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center gap-2 lg:gap-4 w-full"
          >
            <MessageInput
              id="message"
              register={register}
              errors={errors}
              required
              placeholder="Write a message"
            />
            <button
              onClick={() =>  setIsOpen(true)}
              className={`
                rounded-full
                p-2
                cursor-pointer
                hover:bg-sky-500
                transition
                ${styles.bluePrattle}`}
            >
              <HiPaperAirplane
                size={18}
                className="text-white"
              />
            </button>
          </form>
        </div>
        </>
       );
}
 
export default Form;