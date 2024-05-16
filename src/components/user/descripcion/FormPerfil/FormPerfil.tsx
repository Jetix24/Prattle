"use client";
import styles from "./FormPerfil.module.css";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";

interface FormPerfilProps {
    currentUser: User;
  }

  const FormPerfil: React.FC<FormPerfilProps> = ({
    currentUser
    }) => {
        const {
            register,
            handleSubmit,
            setValue,
            watch,
            formState: {
              errors,
            }
          } = useForm<FieldValues>({
            defaultValues: {
              nombre: currentUser.name,
              img: currentUser.image,
            }
          });

          const image = watch('image');

        const handleUpload = (result: any) => {
            setValue('image', result?.info?.secure_url, {
            shouldValidate: true
            })
        }

    return (
        <div className={styles.perfilForm}>
            <div className={styles.nombreGroup}>
                <label id="nombre">{currentUser.name}</label>
            </div>
            <div className={styles.imgGroup}>
            <Image
                    width="48"
                    height="48"
                    className="rounded-full"
                    src={image || currentUser?.image || "/img/placeholder.jpg"}
                    alt="Avatar"
                  />
            </div>
            <div className={styles.edadGroup}>
                <label>Edad: {" "}</label>
                <label id="edad">21</label> 
            </div>
        </div>
    )
}


export default FormPerfil;