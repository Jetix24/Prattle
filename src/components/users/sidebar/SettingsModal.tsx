"use client";

import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Modal from "../Modal";
import Input from "../inputs/Input";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import Button from "../Button";

interface SettingsModalProps {
  isOpen?: boolean;
  onClose: () => void;
  currentUser: User;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  currentUser
}) => {
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
    setIsLoading(true);

    axios.post('/api/settings', data)
      .then(() => {
        router.refresh();
        onClose();
      })
      .catch(() => toast.error('Algo salió mal!'))
      .finally(() => setIsLoading(false));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="m-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-lg font-semibold leading-7 text-white">
                Perfil
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-400">
                Edita tu información pública.
              </p>
              <div className="mt-6 md:flex md:items-center gap-x-8">
                <div 
              className="">
                  <label className="block text-sm font-medium leading-6 text-white">
                    Imagen
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <Image
                      width="48"
                      height="48"
                      className="rounded-full"
                      src={image || currentUser?.image || "/img/placeholder.jpg"}
                      alt="Avatar"
                    />
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
                <div className="mt-3 md:mt-0 ">
                  <label className="block text-sm font-medium leading-6 text-white">
                    Portada
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <Image
                      width="72"
                      height="48"
                      className="rounded"
                      src={cover || "/img/defaultcover.jpg"}
                      alt="Cover"
                    />
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
              <Button disabled={isLoading} secondary onClick={onClose}>
                Cancelar
              </Button>
              <Button disabled={isLoading} type="submit">
                Guardar
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SettingsModal;
