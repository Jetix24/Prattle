'use client'

import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import styles from "./FormDescripcion.module.css"
import Link from 'next/link';
import { User } from "@prisma/client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";


interface FormDescripcionProps {
    currentUser: User;
  }

registerPlugin(FilePondPluginImagePreview, FilePondPluginImageResize, FilePondPluginFileEncode);

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

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log('data:',data);
        setIsLoading(true);
    
        
        axios.post('/api/descripcion', data)
        .then(() => {
          router.push('/user/intereses');
        })
        .catch(() => toast.error('Something went wrong!'))
        .finally(() => setIsLoading(false))
      }

    const [coverWidth, setCoverWidth] = useState<number | undefined>(undefined);
    const [coverHeight, setCoverHeight] = useState<number | undefined>(undefined);

    useEffect(() => {
        const coverWidthValue = 300; // Reemplaza 230 con el valor que desees para el ancho de la portada
        const coverAspectRatio = .75; // Reemplaza 0.75 con el valor que desees para el aspecto de la portada
        const coverHeightValue = coverWidthValue / coverAspectRatio;

        setCoverWidth(coverWidthValue);
        setCoverHeight(coverHeightValue);
    }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.descripcionForm}>
        <div className={styles.inputContainers}>
            <div className={styles.leftContainer}>
                <div className={styles.formGroup}>
                    <label htmlFor="cover">Portada</label>
                    
                    <FilePond
                    className={styles.filePond}
                    id="cover"
                    required
                    {...register("cover" )} 
                    imageResizeTargetWidth={coverWidth}
                    imageResizeTargetHeight={coverHeight}
                    />
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
            <button disabled={isLoading} type="submit">
                Enviar
            </button>
        </form>
    )
}

export default FormDescripcion;