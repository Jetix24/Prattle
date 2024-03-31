import Link from "next/link"
import styles from "./FormDescripcion.module.css"

export const FormDescripcion = () => {
    return (
            <form className={styles.logInForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Correo</label>
                    <div className={styles.inputIconContainer}>
                        <input type="email" id="email" name="email" required placeholder="Ingresa tu correo"/>
                        <img src="/icon/correo.png" alt="icon" className={styles.inputIcon} />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Contraseña</label>
                    <div className={styles.inputIconContainer}>
                            <input type="password" id="password" name="password" required placeholder="Ingresa tu contraseña"/>
                            <img src="/icon/bloquear.png" alt="icon" className={styles.inputIcon} />
                        </div>
                </div>
                    <button type="submit">Ingresar</button>
            </form>
    )
}