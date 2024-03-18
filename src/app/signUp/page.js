{/* pages/signup.js*/}
import styles from "./signup.module.css"
import { FormSignUp } from '@/components/inicioSesion/FormSignUp/FormSignUp';
import { ButtonGoogle } from '@/components/inicioSesion/ButtonGoogle/ButtonGoogle';
export default function SignUp() {

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
                        <FormSignUp />
                        <ButtonGoogle />
                </div>
            </div>
        </div>
    </section>
  );
}
