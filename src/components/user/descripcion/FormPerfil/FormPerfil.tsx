"use client";
import styles from "./FormPerfil.module.css";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";

interface FormPerfilProps {
    currentUser: User;
  }

  const calculateAge = (bornDate: Date) => {
    const today = new Date();
    let age = today.getFullYear() - bornDate.getFullYear();
    const monthDifference = today.getMonth() - bornDate.getMonth();
  
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < bornDate.getDate())) {
      age--;
    }
  
    return age;
  };

  const FormPerfil: React.FC<FormPerfilProps> = ({
    currentUser
    }) => {
        const {
            setValue,
            watch,
            formState: {
              errors,
            }
          } = useForm<FieldValues>({
            defaultValues: {
              nombre: currentUser.name,
              img: currentUser.image,
              date: currentUser.bornDate,
            }
          });

          const image = watch('image');

        const handleUpload = (result: any) => {
            setValue('image', result?.info?.secure_url, {
            shouldValidate: true
            })
        }

        const age = currentUser.bornDate ? calculateAge(new Date(currentUser.bornDate)) : 'Unknown';

    return (
        <div className={styles.perfilForm}>
            <div className={styles.nombreGroup}>
                <label id="nombre">{currentUser.name}</label>
            </div>
            <div className={styles.imgGroup}>
                <Image
                    width="200"
                    height="100"
                    className="rounded-full"
                    src={image || currentUser?.image || "/img/placeholder.jpg"}
                    alt="Avatar"
                  />
            </div>
            <div className={styles.edadGroup}>
                <label>Edad: {" "}</label>
                <label id="edad">{age}</label> 
            </div>
        </div>
    )
}


export default FormPerfil;