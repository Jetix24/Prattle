import styles from "./logIn.module.css"
import Link from 'next/link';
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
                        <div className={styles.dividerContainer}>
                            <div className={styles.line}></div>
                            <span className={styles.orText}>o</span>
                            <div className={styles.line}></div>
                        </div>
                        <ButtonGoogle />
                        <div className={styles.loginPrompt}>
                            ¿Aún no tienes cuenta? {" "}
                            <Link href="/signUp">
                                Registrate
                            </Link>
                        </div>
            <div className={styles.footer}>
              Al continuar, aceptas las condiciones del servicio
            </div>
                </div>
            </div>
        </div>
    </section>
  );
}
