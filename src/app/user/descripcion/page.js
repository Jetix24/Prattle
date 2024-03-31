import styles from './descripcion.module.css'; 
import Link from 'next/link';
import { FormPerfil} from '@/components/descripcion/FormPerfil/FormPerfil';
import { FormDescripcion } from '@/components/descripcion/FormDescripcion/FormDescripcion';
export default function descripcion() {

  return (
    <section>
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Perfil</h2>
            </div>
            <div className={styles.left}>
                <FormPerfil/>
            </div>    
            <div className={styles.right}>
                <FormDescripcion/>
            </div>
            <div className={styles.footer}>
                <Link href="/perfil">
                    <button>Aceptar</button>
                </Link>
            </div>
        </div>
    </section>
  );
}
