"use client";
import styles from "./FormPerfil.module.css";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import { toast } from "react-hot-toast";
import Button from '@/components/users/Button';


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
      const router = useRouter();
      const [isLoading, setIsLoading] = useState(false);
        const {
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
              date: currentUser.bornDate,
            }
          });

          const image = watch('image');

        const handleUpload = (result: any) => {
            setValue('image', result?.info?.secure_url, {
            shouldValidate: true
            })
        }

        const onSubmit: SubmitHandler<FieldValues> = (data) => {
          console.log('data:',data);
          setIsLoading(true);
      
          
          axios.post('/api/settings', data)
          .catch(() => toast.error('Something went wrong!'))
          .finally(() => setIsLoading(false))
        }

        const age = currentUser.bornDate ? calculateAge(new Date(currentUser.bornDate)) : 'Unknown';

    return (
      
        <div className={styles.perfilForm}>
            <div className={styles.nombreGroup}>
                <label id="nombre">{currentUser.name}</label>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
              <div className={styles.imgGroup}>
                  <Image
                      width="1000"
                      height="1000"
                      className="rounded-full"
                      src={image || currentUser?.image || "/img/placeholder.jpg"}
                      alt="Avatar"
                    />
                  <CldUploadButton 
                    options={{ maxFiles: 1 }}
                    onUpload={handleUpload}
                    uploadPreset="ft70nulr"
                  >
                  Subir             
                  </CldUploadButton> 
              </div>
              <div className={styles.buttonSubmit}>
                <Button disabled={isLoading} type="submit" >
                  Guardar
              </Button>  
              </div>
            </form>
            <div className={styles.edadGroup}>
                <label>Edad: {" "}</label>
                <label id="edad">{age}</label> 
            </div>
        </div>
       
    )
}


export default FormPerfil;