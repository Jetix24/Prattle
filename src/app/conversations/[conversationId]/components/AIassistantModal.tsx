import { useEffect, useState } from "react";
import Button from "@/components/users/Button";
import Modal from "@/components/users/Modal";
import { messageReceived, sendRequestToOpenAI } from "@/app/hooks/useOpenAIConnection";
import getEachUserItsInterest from '@/app/actions/getEachUserItsInterest';

interface AIassistantModalProps {
  isOpen?: boolean;
  onClose: () => void;
  otherUserId: string;
}

const AIassistantModal: React.FC<AIassistantModalProps> = ({
  isOpen,
  onClose,
  otherUserId,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [messageGenerated, setMessageGenerated] = useState(false);
  const [buttonText, setButtonText] = useState('Obtener sugerencias');
  const [interests, setInterests] = useState<string[]>([]);

  useEffect(() => {
    const fetchInterests = async () => {
      try {
        const userInterests = await getEachUserItsInterest(otherUserId);
        setInterests(userInterests);
      } catch (error) {
        console.error("Error fetching user interests:", error);
      }
    };

    fetchInterests();
  }, [otherUserId]);

  const handleSendRequest = () => {
    sendRequestToOpenAI(setIsLoading, setButtonText, setMessageGenerated, interests);
  };

  const handleMessageButtonClick = () => {
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
          {messageGenerated && (
            <Button onClick={handleMessageButtonClick}>
              {buttonText}
            </Button>
          )}
          <Button onClick={handleSendRequest} disabled={isLoading}>
            {isLoading ? "Cargando..." : "Generar mensaje"}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AIassistantModal;
