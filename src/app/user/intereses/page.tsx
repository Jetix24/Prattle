import styles from './intereses.module.css'; 
import getCurrentUser from "@/app/actions/getCurrentUser";
import getInterests from '@/app/actions/getInterests';
import FormIntereses from '@/components/user/intereses/FormIntereses/FormIntereses';
import getUserInterests from '@/app/actions/getUserInterests';

async function descripcion() {

  const currentUser = await getCurrentUser();
  const interests = await getInterests();
  const userInterests = await getUserInterests();

  return (
    <section>
        <div className={styles.container}>
            <div className={styles.header}>
               <h2>¿Qué te interesa?</h2>
               <h3>Esto personalizará tu experiencia de inicio elige 3 opciones</h3>
            </div>
            <div className={styles.bgPrattle}>
                <FormIntereses currentUser={currentUser!} interest={interests} userInterest={userInterests}/>
            </div>
        </div>
    </section>
  );
}

export default descripcion;