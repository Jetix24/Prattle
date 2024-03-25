import Link from "next/link"
import styles from "./FormSignUp.module.css"

export const FormSignUp = () => {
    return (
            <form className={styles.signUpForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="nombre" id="nombre" name="nombre" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Correo</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.passwordContainer}>
                <div className={styles.formGroup + ' ' + styles.formGroupPassword}>
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" name="password" required />
                        </div>
                        <div className={styles.formGroup + ' ' + styles.formGroupPassword}>
                        <label htmlFor="password">Confirmar Contraseña</label>
                        <input type="password" id="password2" name="password2" required />
                    </div>
                </div>
                <div className={styles.dateButtonContainer}>
                    <div className={styles.formGroup + ' ' + styles.formGroupPassword}>
                        <label htmlFor="fecha">Fecha de Nacimiento</label>
                        <input type="date" id="fecha" name="fecha" required />
                    </div>
                    <button type="submit">Ingresar</button>
                </div>
            </form>
            
    )
}