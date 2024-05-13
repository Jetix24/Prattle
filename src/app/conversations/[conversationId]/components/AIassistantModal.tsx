"use client";

import Button from "@/components/users/Button";
import Modal from "@/components/users/Modal";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

interface AIassistantModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

interface ButtonProps {
  // Other existing props
  loading?: boolean; // Add this line
}

const AIassistantModal: React.FC<AIassistantModalProps> = ({
  isOpen,
  onClose,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  return ( 
    <Modal isOpen={isOpen} onClose={onClose}>
        <div className="space-y-12">
            <div>
                <h2 className="
                text-base
                font-semibold
                leading-7
                text-white
                ">
                ¿No sabes como seguir?
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-300">
                Selecciona una opción para que el asistente te ayude a continuar la conversación.
                </p>
            </div>
            <div className="
                flex
                gap-4
                justify-center
                ">
                <Button >
                    Sugerir respuesta
                </Button>
                <Button >
                    Sugerir pregunta
                </Button>
                <Button >
                    Sugerir acción
                </Button>
            </div>
        </div>
    </Modal>
   );
}
 
export default AIassistantModal;