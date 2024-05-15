import { useState } from "react";
import Button from "@/components/users/Button";
import Modal from "@/components/users/Modal";
import { messageReceived, sendRequestToOpenAI } from "@/app/hooks/useOpenAIConnection";

interface AIassistantModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const AIassistantModal: React.FC<AIassistantModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [messageGenerated, setMessageGenerated] = useState(false);
  const [buttonText, setButtonText] = useState('Obtener sugerencias'); // Estado para el texto del botón
  
  const handleSendRequest = () => {
    // Pasar las funciones de estado como argumentos
    sendRequestToOpenAI(setIsLoading, setButtonText, setMessageGenerated);
  };

  const handleMessageButtonClick = () => {
    // Cerrar el modal, mandar el mensaje generado a la funcion messageReceived de useOpenAIConnection.ts y limpiar el estado
    onClose();
    messageReceived(buttonText);
    setButtonText('Obtener sugerencias');
    setMessageGenerated(false);    
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
          {messageGenerated && (
            <Button onClick={handleMessageButtonClick}>
              {buttonText}
            </Button>
          )}
          <Button onClick={handleSendRequest}disabled={isLoading}>
            {isLoading ? "Cargando..." : "Generar mensaje"}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AIassistantModal;