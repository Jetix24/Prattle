// FormIntereses.tsx
"use client";
import React, { useState } from 'react';
import styles from './FormIntereses.module.css';
import axios from "axios";
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import { toast } from "react-hot-toast";
import { Categories } from '@prisma/client';
import { useRouter } from 'next/navigation';
import Select from '@/components/users/inputs/Select';

import Input from "@/components/users/inputs/Input";
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
      category: []
    },
  });

  const category = watch('category');

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios.post('/api/interest', {
      ...data
    })
    .then(response => {
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
    <section>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <h2>Registro de Intereses</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.interesesForm}>
          <div className={styles.formGroup}>
            
            <div className={styles.inputIconContainer}>
              <Input label="Nombre"type="text" id="name" disabled={isLoading} register={register} required errors={errors} />
              <img src="/icon/nombre.png" alt="icon" className={styles.inputIcon} />
            </div>
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
    </section>
  );
};

export default FormIntereses;
