import styles from './descripcion.module.css'; 
import Link from 'next/link';
import { FormPerfil } from '@/components/user/perfil/FormPerfil';
import { FormDescripcion } from '@/components/user/descripcion/FormDescripcion/FormDescripcion';
export default function descripcion() {

  return (
    <section>
        <div className={styles.container}>
            <div className={styles.header}>
               <h2>Perfil</h2>
            </div>
            <div className={styles.formContainer}>
                <div className={styles.left}>
                    <FormPerfil/>
                </div>    
                <div className={styles.right}>
                    <FormDescripcion/>
                </div>
            </div>
        </div>
    </section>
  );
}
