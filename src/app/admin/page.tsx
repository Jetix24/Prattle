import Link from "next/link";
import styles from "./admin.module.css"

function adminPage() {
    return (
        <div className={styles.container}>
        <div className={styles.loginBox}>
          <img src="/img/logo_bleu.png" alt="Logo" className={styles.logo} />
          <div className={styles.inputContainer}>
            <label htmlFor="username" className={styles.label}>Usuario</label>
            <input type="text" id="username" placeholder="Ingrese su usuario" className={styles.input} />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password" className={styles.label}>Contraseña</label>
            <input type="password" id="password" placeholder="Ingrese su contraseña" className={styles.input} />
          </div>
          <Link href="/admin/datos">
            <button className={styles.button}>Entrar</button>
          </Link>
        </div>
      </div>
    );
  }
  
  export default adminPage;