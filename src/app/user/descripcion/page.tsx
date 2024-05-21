import styles from './descripcion.module.css';
import Link from 'next/link';
import FormDescripcion from '@/components/user/descripcion/FormDescripcion/FormDescripcion';
import FormPerfil from '@/components/user/descripcion/FormPerfil/FormPerfil';
import { User } from '@prisma/client';
import getCurrentUser from "@/app/actions/getCurrentUser";

async function descripcion() {
  const currentUser = await getCurrentUser();
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Perfil</h2>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.left}>
            <FormPerfil currentUser={currentUser!}/>
          </div>
          <div className={styles.right}>
            <FormDescripcion currentUser={currentUser!}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default descripcion;