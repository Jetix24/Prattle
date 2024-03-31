import styles from "./maintenance.module.css"
import Link from 'next/link';
export default function maintenance() {

  return (
    <section>
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img src="/icon/mantenimiento.png" alt="Logo del mantenimiento"/>
                <h2>Esta sección se encuentra en mantenimiento. Estamos trabajando para establecer el acceso lo antes posible</h2>
            </div>
            <div className={styles.form}>
                <Link href="/">
                    <button>Aceptar</button>
                </Link>
            </div>
        </div>
    </section>
  );
}
