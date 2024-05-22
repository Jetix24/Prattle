"use client";
import styles from './categorias.module.css'; 
import { useEffect, useState } from 'react';
import axios from "axios";
import { getSession, signIn, useSession } from 'next-auth/react';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import { toast } from "react-hot-toast";
import Button from '@/components/users/Button';

export default function Categorias() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: '',
      cover:    '',
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {

      await axios.post('/api/interest', {
        name: data.nombre,  // Aquí se envía correctamente el nombre desde el campo "nombre" del formulario
        cover: data.cover 
      });
      toast.success('Se agrego correctamente');
      // Limpia los campos de entrada
      reset();

    } catch (error) {
      toast.error('Algo salio mal');
    } finally {
      setIsLoading(false);
    }
  };

  const cover = watch('cover');
  const handleUpload = (result: any) => {
    setValue('cover', result?.info?.secure_url, {
      shouldValidate: true
    })
  }

  return (
    <section>
      <div className={styles.container}>
      <div className={styles.left}></div>
        <div className={styles.right}>
            <div className={styles.logoContainer}>
                <h2>Registro de Intereses</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.interesesForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="nombre">Etiqueta</label>
                    <div className={styles.inputIconContainer}>
                        <input type="text" id="name" {...register('nombre', { required: true })} placeholder="Ingresa el nombre del interes" />
                        <img src="/icon/nombre.png" alt="icon" className={styles.inputIcon} />
                    </div>
                </div>
                <label htmlFor="cover">Portada</label>
                <div className={styles.coverContainer}>
                    <div className={styles.imgGroup}>
                        <Image
                            width="400"
                            height="400"
                            className="rounded-[10px]"
                            src={cover || "/img/placeholder.jpg"}
                            alt="Avatar"
                            />
                    </div>
                </div> 
                <CldUploadButton 
                            options={{ maxFiles: 1 }}
                            onUpload={handleUpload}
                            uploadPreset="ft70nulr"
                        >
                        Subir             
                        </CldUploadButton>    
                <button type="submit" disabled={isLoading}>
                  {isLoading ? 'Cargando...' : 'Guardar'}
                </button>
            </form>
            </div>
            
      </div>
    </section>
  );
}

function setValue(arg0: string, secure_url: any, arg2: { shouldValidate: boolean; }) {
    throw new Error('Function not implemented.');
}

