import styles from './signUp.module.css'; 
import { FormSignUp} from '@/components/registro/FormSignUp/FormSignUp';
import { ButtonGoogle } from '@/components/registro/ButtonGoogle/ButtonGoogle';
export default function sigUp() {

  return (
    <section>
        <div className={styles.container}>
        <div className={styles.left}>
                <div className={styles.formContainer}> 
                    <div className={styles.logoContainer}>
                        <h2>Registro</h2>
                    </div>
                        <FormSignUp />
                        <ButtonGoogle />
                </div>
            </div>
            <div className={styles.right}>
            
            </div>
        </div>
    </section>
  );
}
