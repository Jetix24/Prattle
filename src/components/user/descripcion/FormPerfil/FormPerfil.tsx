"use client";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import { toast } from "react-hot-toast";
import Button from '@/components/users/Button';
import Input from "@/components/users/inputs/Input";


interface FormPerfilProps {
  currentUser: User;
}

  const FormPerfil: React.FC<FormPerfilProps> = (
    {currentUser}
  ) => {
      const router = useRouter();

      const [isLoading, setIsLoading] = useState(false);
      const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
      } = useForm<FieldValues>({
        defaultValues: {
          name: currentUser?.name,
          image: currentUser?.image,
          bornDate: currentUser?.bornDate?.toISOString().split('T')[0],
          title: currentUser?.title,
          description: currentUser?.description,
          cover: currentUser?.cover,
        }
      });

          const image = watch('image');
          const cover = watch('cover');
        
          const handleUpload = (result: any, field: string) => {
            setValue(field, result?.info?.secure_url, {
              shouldValidate: true
            });
          };

        const onSubmit: SubmitHandler<FieldValues> = (data) => {
          console.log('data:',data);
          setIsLoading(true);
      
          
          axios.post('/api/settings', data)
        .then(() => {
          router.push('/user/intereses');
        })
        .catch(() => toast.error('Something went wrong!'))
        .finally(() => setIsLoading(false))
      }

    

    return (
      <main>
        <div className="m-4">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex md:items-center gap-x-8">
          <div id="images">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-8">
              <div className="mt-6 gap-x-8">
                <div className="mb-4">
                  <label className="block text-xl text-center font-medium leading-6 text-white">
                    Imagen
                  </label>
                  <div className="mt-2 gap-x-3">
                    <div className="my-4 flex items-center justify-center">
                    <Image
                      width="112"
                      height="112"
                      className="rounded-full"
                      src={image || currentUser?.image || "/img/placeholder.jpg"}
                      alt="Avatar"
                    />
                    </div>
                    <div className="flex items-center justify-center">
                    <CldUploadButton
                        options={{ maxFiles: 1 }}
                        onUpload={(result) => handleUpload(result, 'image')}
                        uploadPreset="ft70nulr"
                    >
                        <Button disabled={isLoading} secondary type="button">
                        Cambiar
                        </Button>
                    </CldUploadButton>
                    </div>
                  </div>
                </div>
                <div className="mt-3 md:mt-0 ">
                  <label className="block text-xl text-center font-medium leading-6 text-white">
                    Portada
                  </label>
                  <div className="mt-2 gap-x-3">
                  <div className="my-4 flex items-center justify-center">
                    <Image
                      width="168"
                      height="122"
                      className="rounded"
                      src={cover || "/img/defaultcover.jpg"}
                      alt="Cover"
                    />
                    </div>
                    <div className="flex items-center justify-center">
                    <CldUploadButton
                      options={{ maxFiles: 1 }}
                      onUpload={(result) => handleUpload(result, 'cover')}
                      uploadPreset="ft70nulr"
                    >
                      <Button disabled={isLoading} secondary type="button">
                        Cambiar
                      </Button>
                    </CldUploadButton>
                    </div>
                  </div>
                </div>
              </div>              
            </div>

          </div>
          </div>
        
          <div id="Inputs" className="w-fit sm:w-96">
            <div className="space-y-12">
              <div className="border-b border-gray-900/10">
                
                {/* User Info */}
                <div className="mt-6 flex flex-col gap-y-8">
                  <Input
                    disabled={isLoading}
                    label="Nombre"
                    id="name"
                    errors={errors}
                    required
                    register={register}
                  />
                  <Input
                    disabled={isLoading}
                    label="Fecha de Nacimiento"
                    id="bornDate"
                    type="date"
                    errors={errors}
                    register={register}
                  />
                  <Input
                    disabled={isLoading}
                    label="Título"
                    id="title"
                    errors={errors}
                    register={register}
                  />
                  <Input
                    disabled={isLoading}
                    label="Descripción"
                    id="description"
                    errors={errors}
                    register={register}
                  />
                  
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <Button disabled={isLoading} type="submit">
                  Guardar
                </Button>
              </div>
            </div>
          </div>
          </div>
        </form>
      </div>
      </main>       
    )
}


export default FormPerfil;