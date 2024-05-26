'use client'

import styles from "./FormDescripcion.module.css"
import { User } from "@prisma/client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import Button from '@/components/users/Button';

interface FormDescripcionProps {
    currentUser: User;
  }


const FormDescripcion: React.FC<FormDescripcionProps> = ({
    currentUser
    }) => {
        const router = useRouter();
        const [isLoading, setIsLoading] = useState(false);
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
                title: currentUser?.title,
                cover: currentUser?.cover,     
                description: currentUser?.description
            }
    });

    const cover = watch('cover');

    const handleUpload = (result: any) => {
        setValue('cover', result?.info?.secure_url, {
          shouldValidate: true
        })
      }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        
        setIsLoading(true);
    
        
        axios.post('/api/descripcion', data)
        .then(() => {
          router.push('/user/intereses');
        })
        .catch(() => toast.error('Something went wrong!'))
        .finally(() => setIsLoading(false))
      }

    

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.descripcionForm}>
        <div className={styles.inputContainers}>
            <div className={styles.leftContainer}>
                <div className={styles.formGroup}>
                    <label htmlFor="cover">Portada</label>
                    <div className={styles.coverContainer} id="cover">
                    <Image
                    width="400"
                    height="400"
                    className="rounded-[15px]"
                    src={cover || currentUser?.cover || "/img/placeholder.jpg"}
                    alt="Avatar"
                  />
                  </div>
                  <CldUploadButton 
                    options={{ maxFiles: 1 }}
                    onUpload={handleUpload}
                    uploadPreset="ft70nulr"
                  >
                      Subir                    
                  </CldUploadButton>
                </div>
            </div>
            <div className={styles.rightContainer}>
                    <div className={styles.formGroup}>
                        <label htmlFor="title">Titular</label>
                            <textarea
                                disabled={isLoading}
                                id="title" 
                                required
                                {...register("title" )} 
                                placeholder="Ingresa tu titular"/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="description">Acerca de ti</label>
                            <textarea 
                                disabled={isLoading}
                                id="description" 
                                required 
                                {...register("description")} 
                                placeholder="Ingresa algo que te describa"/>
                    </div>
            </div>
        </div>
            <Button disabled={isLoading} type="submit">
                Guardar
            </Button>
        </form>
    )
}

export default FormDescripcion;