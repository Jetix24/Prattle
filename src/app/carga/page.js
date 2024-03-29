import styles from "./carga.module.css"
import Link from 'next/link';
export default function carga() {

  return (
    <section>
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img src="/img/logo_seul.png" alt="Logo de carga"/>
            </div>
        </div>
    </section>
  );
}
