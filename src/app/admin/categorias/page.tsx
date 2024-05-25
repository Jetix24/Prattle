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
import { MdNewLabel } from "react-icons/md";


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
                <h2>Categorias</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.categoriasForm}>
                <div className={styles.formGroup}>
                   
                    <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MdNewLabel className="w-6 h-6 text-icon-color dark:text-icon-color"/>      
                    </div>
                    <input 
                      type="text" 
                      id="input-group-1" 
                      className="bg-input-gray text-gray-900 text-sm font-semibold rounded hover:bg-white focus:outline-none focus:bg-white focus:ring-0 block w-full ps-10 p-2.5 transition-colors duration-200" 
                      placeholder="Nombre del interes"
                      disabled={isLoading} 
                      {...register('nombre')}
                      required 
                    />
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

