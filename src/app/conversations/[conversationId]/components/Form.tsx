"use client";

import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import styles from "./Form.module.css";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";
import { CldUploadButton } from "next-cloudinary";

const Form = () => {

    const { conversationId } = useConversation();

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
        <div className={styles.div}>
            <CldUploadButton options={{ maxFiles: 1 }} onUpload={handleUpload} uploadPreset="ft70nulr" className={styles.CldUploadButton}>
              <HiPhoto size={30} className={styles.photo} />
            </CldUploadButton>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <MessageInput
                id="message"
                register={register}
                errors={errors}
                required
                placeholder="Write a message"
                />
                <button
                type="submit"
                className={styles.button}>
                <HiPaperAirplane size={18} className={styles.airplane}/>
                </button>
            </form>
        </div> 
    );
}
 
export default Form;