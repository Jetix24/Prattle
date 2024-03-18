import styles from "./logIn.module.css"
import { FormLogIn} from '@/components/inicioSesion/FormLogIn/FormLogIn';
import { ButtonGoogle } from '@/components/inicioSesion/ButtonGoogle/ButtonGoogle';
export default function logIn() {

  return (
    <section>
        <div className={styles.container}>
            <div className={styles.left}>
            
            </div>

            <div className={styles.right}>
                <div className={styles.formContainer}> 
                    <div className={styles.logoContainer}>
                        <img src="/img/logo_seul.png" alt="Logo de la página"/>
                        <h2>Iniciar Sesión</h2>
                    </div>
                        <FormLogIn />
                        <ButtonGoogle />
                </div>
            </div>
        </div>
    </section>
  );
}
