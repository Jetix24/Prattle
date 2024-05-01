"use client";
import { Dialog,Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoClose } from "react-icons/io5";
import styles from './Modal.module.css';

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children
  }) => {
    return ( 
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
        as="div"
        className={styles.dialogContainer}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter={styles.esout}
          enterFrom={styles.noopacity}
          enterTo={styles.opacity}
          leave={styles.easein}
          leaveFrom={styles.opacity}
          leaveTo={styles.noopacity}
        >
          <div
            className={styles.div}/>
        </Transition.Child>
        <div className={styles.bigcontainer}>
          <div className={styles.container}>
            <Transition.Child
              as={Fragment}
              enter={styles.esout}
              enterFrom={styles.noOpsmTranslate}
              enterTo={styles.OpTranslat}
              leave={styles.easein}
              leaveFrom={styles.OpTranslat}
              leaveTo={styles.noOpsmTranslate}
            >
              <Dialog.Panel
                className={styles.dialogPanel}>
                <div
                  className={styles.divbutton}>
                  <button type="button" className={styles.button} onClick={onClose}>
                    <span className={styles.srOnly}>Close</span>
                    <IoClose className={styles.ioclose}/>
                  </button>
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    );
}
 
export default Modal;