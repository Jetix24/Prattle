"use client";
import styles from './categorias.module.css'; 
import { useEffect, useState } from 'react';
import axios from "axios";
import { getSession, signIn, useSession } from 'next-auth/react';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: ''
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {

      await axios.post('/api/categories', {
        name: data.nombre  // Aquí se envía correctamente el nombre desde el campo "nombre" del formulario 
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


  return (
    <section>
      <div className={styles.container}>
      <div className={styles.left}></div>
        <div className={styles.right}>
            <div className={styles.logoContainer}>
                <h2>Registro de Categorias</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.categoriasForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="nombre">Nombre</label>
                    <div className={styles.inputIconContainer}>
                        <input type="text" id="name" {...register('nombre', { required: true })} placeholder="Ingresa la categoria" />
                        <img src="/icon/nombre.png" alt="icon" className={styles.inputIcon} />
                    </div>
                </div>
                <button type="submit" disabled={isLoading}>
                  {isLoading ? 'Cargando...' : 'Guardar'}
                </button>
            </form>
            </div>
            
      </div>
    </section>
  );
}

