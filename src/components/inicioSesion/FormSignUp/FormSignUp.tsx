import Link from "next/link"
import styles from "./FormSignUp.module.css"

export const FormSignUp = () => {
    return (
            <form className={styles.signupForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Usuario</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" required />
                </div>
                    <button type="submit">Ingresar </button>
            </form>
    )
}