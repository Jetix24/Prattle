import styles from './intereses.module.css'; 
import Link from 'next/link';
import { FormIntereses} from '@/components/user/intereses/FormIntereses/FormIntereses';
export default function descripcion() {

  return (
    <section>
        <div className={styles.container}>
            <div className={styles.header}>
               <h2>¿Qué te interesa?</h2>
               <h3>Esto personalizará tu experiencia de inicio elige 3 opciones</h3>
            </div>
            <div className={styles.formContainer}>
                <FormIntereses/>
            </div>
        </div>
    </section>
  );
}
