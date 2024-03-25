import styles from './signUp.module.css'; 
import Link from 'next/link';
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
                <div className={styles.dividerContainer}>
                  <div className={styles.line}></div>
                  <span className={styles.orText}>o</span>
                  <div className={styles.line}></div>
                </div>
                <ButtonGoogle />
                <div className={styles.loginPrompt}>
                  ¿Ya tienes cuenta? {" "}
                  <Link href="/logIn">
                    Inicia Sesión
                  </Link>
                </div>
            </div>
            <div className={styles.footer}>
              Al continuar, aceptas las condiciones del servicio
            </div>
          </div>
          <div className={styles.right}>
            
          </div>
        </div>
    </section>
  );
}
