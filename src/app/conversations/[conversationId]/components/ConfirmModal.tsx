"use client";

import Button from "@/components/users/Button";
import Modal from "@/components/users/Modal";
import useConversation from "@/app/hooks/useConversation";
import styles from "./Form.module.css";
import { Dialog } from "@headlessui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { FiAlertTriangle } from "react-icons/fi";

interface ConfirmModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose
}) => {
  const router = useRouter();
  const { conversationId } = useConversation();
  const [isLoading, setIsLoading] = useState(false);

  const onDelete = useCallback(() => {
    setIsLoading(true);

    axios.delete(`/api/conversations/${conversationId}`)
    .then(() => {
      onClose();
      router.push('/conversations');
      router.refresh();
    })
    .catch(() => toast.error('Algo salió mal!'))
    .finally(() => setIsLoading(false))
  }, [conversationId, router, onClose]);

  return ( 
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="sm:flex sm:items-start">
        <div
          className="
            mx-auto
            flex
            h-12
            w-12
            flex-shrink-0
            items-center
            justify-center
            rounded-full
            sm:mx-0
            sm:h-10
            sm:w-10"
        >
          <FiAlertTriangle
            className="mt-1 h-6 w-6 text-red-600"
          />
        </div>
        <div
          className="
            mt-3
            text-center
            sm:ml-4
            sm:mt-0
            sm:text-left
          "
        >
          <Dialog.Title
            as="h3"
            className="
              text-base
              font-semibold
              leading-6
              text-white
            "
          >
            Delete conversation
          </Dialog.Title>
          <div className="m-2 sm:mt-2 sm:mx-0 sm:mb-0">
            <p className="text-sm text-gray-300">
              Are you sure you want to delete this conversation? This action cannot be undone.
            </p>
          </div>
        </div>
      </div>
      <div
        className="
          mt-5
          mr-4
          sm:mt-4
          sm:mr-0
          flex
          flex-row-reverse
        "
      >
        <Button
          disabled={isLoading}
          danger
          onClick={onDelete}
        >
          Delete
        </Button>

        <Button
          disabled={isLoading}
          secondary
          onClick={onClose}
        >
          Cancel
        </Button>
        
      </div>
    </Modal>
   );
}
 
export default ConfirmModal;