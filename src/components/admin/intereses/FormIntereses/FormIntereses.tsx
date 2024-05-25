"use client";
import React, { useState } from 'react';
import styles from './FormIntereses.module.css';
import axios from "axios";
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import { toast } from "react-hot-toast";
import { Categories } from '@prisma/client';
import Select from '@/components/users/inputs/Select';
import Input from "@/components/users/inputs/Input";
import { MdNewLabel } from "react-icons/md";

interface FormInteresesProps {
  categories: Categories[];
}

const FormIntereses: React.FC<FormInteresesProps> = ({ categories }) => {
  
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      cover: '',
      category: ''
    },
  });

  const category = watch('category');

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios.post('/api/interest', {
      ...data
    })
    .then(() => {
      toast.success('Se agregó correctamente');
      reset();
    })
    .catch(error => {
      if (error.response && error.response.status === 400) {
        toast.error('El interes ya existe');
      } else {
        toast.error('Algo salió mal');
      }
      console.error(error); // Esto imprimirá el error en la consola
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  const cover = watch('cover');
  const handleUpload = (result) => {
    setValue('cover', result?.info?.secure_url, {
      shouldValidate: true
    });
  };

  return (
    <section className={styles.container}>
        <div className={styles.logoContainer}>
          <h2>Intereses</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.interesesForm}>        
          <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MdNewLabel className="w-6 h-6 text-icon-color dark:text-icon-color"/>      
                </div>
                <input 
                  type="text" 
                  id="input-group-1" 
                  className="bg-input-gray text-gray-900 text-sm rounded hover:bg-white focus:outline-none focus:bg-white focus:ring-0 block w-full ps-10 p-2.5 transition-colors duration-200" 
                  placeholder="Nombre del interes"
                  disabled={isLoading} 
                  {...register('name')}
                  required 
                />
              </div>
                
          <div className={styles.formGroup}>
            
            <Select
              disabled={isLoading}
              label="Categorías"
              options={categories.map((category) => ({
                value: category.id,
                label: category.name
              }))}
              onChange={(value) => setValue('category', value, { 
                shouldValidate: true 
              })}
              value={category}
            />
          </div>
          <label htmlFor="cover">Portada</label>
          <div className={styles.coverContainer}>
            <div className={styles.imgGroup}>
              <Image
                width="400"
                height="400"
                className="rounded-[10px]"
                src={cover || "/img/agregar.png"}
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
    </section>
  );
};

export default FormIntereses;
