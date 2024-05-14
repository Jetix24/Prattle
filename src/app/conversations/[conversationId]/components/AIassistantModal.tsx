import { useState } from "react";
import axios from "axios";
import Button from "@/components/users/Button";
import Modal from "@/components/users/Modal";
import { sendMessageToOpenAI } from "@/app/hooks/useOpenAI";
import { useRouter } from "next/router";

interface AIassistantModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const AIassistantModal: React.FC<AIassistantModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState('Obtener sugerencias'); // Estado para el texto del botón

  // Función para enviar un mensaje al espacio de chat
  const sendMessage = async () => {
    setIsLoading(true); // Inicia el indicador de carga
    try {
      const response = await sendMessageToOpenAI("Dame solamente una frase o una pregunta para continuar cualquier conversación"); // Asume que esta función es asíncrona y retorna una promesa
      setButtonText(response); // Actualiza el texto del botón con la respuesta
    } catch (error) {
      console.error("Error al enviar mensaje a OpenAI:", error);
      setButtonText('Error, intenta de nuevo'); // Manejo de error
    } finally {
      setIsLoading(false); // Detiene el indicador de carga
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-12">
        <div>
          <h2 className="text-base font-semibold leading-7 text-white">
            ¿No sabes cómo seguir?
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-300">
            Selecciona una opción para que el asistente te ayude a continuar la conversación.
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          {/* Botón actualizado para mostrar el estado de carga o el texto de la respuesta */}
          <Button onClick={sendMessage}>
            {isLoading ? "Cargando..." : buttonText}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AIassistantModal;