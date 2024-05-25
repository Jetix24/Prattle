import styles from './intereses.module.css'; 
import Link from 'next/link';
import getCurrentUser from "@/app/actions/getCurrentUser";
import getInterests from '@/app/actions/getInterests';
import FormIntereses from '@/components/user/intereses/FormIntereses/FormIntereses';

async function descripcion() {

  const currentUser = await getCurrentUser();
  const interests = await getInterests();

  return (
    <section>
        <div className={styles.container}>
            <div className={styles.header}>
               <h2>¿Qué te interesa?</h2>
               <h3>Esto personalizará tu experiencia de inicio elige 3 opciones</h3>
            </div>
            <div className={`h-screen ${styles.bgPrattle}`}>
                <FormIntereses currentUser={currentUser!} interest={interests}/>
            </div>
        </div>
    </section>
  );
}

export default descripcion;