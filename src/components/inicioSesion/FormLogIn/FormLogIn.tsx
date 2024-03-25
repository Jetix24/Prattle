import Link from "next/link"
import styles from "./FormLogIn.module.css"

export const FormLogIn = () => {
    return (
            <form className={styles.logInForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Correo</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" required />
                </div>
                    <button type="submit">Ingresar</button>
            </form>
    )
}