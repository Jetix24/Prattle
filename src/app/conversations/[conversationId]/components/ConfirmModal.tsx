"use client";

import Button from "@/components/users/Button";
import Modal from "@/components/users/Modal";
import useConversation from "@/app/hooks/useConversation";
import { Dialog } from "@headlessui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { FiAlertTriangle } from "react-icons/fi";
import styles from './ConfirmModal.module.css';
import Avatar from "@/components/users/Avatar";

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
    .catch(() => toast.error('Something went wrong!'))
    .finally(() => setIsLoading(false))
  }, [conversationId, router, onClose]);

  return ( 
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className={styles.container}>
        <div className={styles.background}>
          <FiAlertTriangle className={styles.alert}/>
        </div>
        <div className={styles.info}>
          <Dialog.Title
            as="h3"
            className={styles.title}>
            Delete conversation
          </Dialog.Title>
          <div className={styles.divtext}>
            <p className={styles.text}>
              Are you sure you want to delete this conversation? This action cannot be undone.
            </p>
          </div>
        </div>
      </div>
      <div
        className={styles.divbuttons}>
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