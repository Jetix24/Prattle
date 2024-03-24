import Link from "next/link"
import styles from "./FormSignUp.module.css"

export const FormSignUp = () => {
    return (
            <form className={styles.signUpForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Usuario</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Confirmar Contraseña</label>
                    <input type="password" id="password" name="password" required />
                </div>
                    <button type="submit">Ingresar</button>
            </form>
    )
}