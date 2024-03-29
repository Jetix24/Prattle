import Link from "next/link"
import styles from "./FormSignUp.module.css"

export const FormSignUp = () => {
    return (
            <form className={styles.signUpForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="nombre">Nombre</label>
                    <div className={styles.inputIconContainer}>
                        <input type="nombre" id="nombre" name="nombre" required placeholder="Ingresa tu nombre" />
                        <img src="/icon/nombre.png" alt="icon" className={styles.inputIcon} />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Correo</label>
                    <div className={styles.inputIconContainer}>
                        <input type="email" id="email" name="email" required placeholder="Ingresa tu correo"/>
                        <img src="/icon/correo.png" alt="icon" className={styles.inputIcon} />
                    </div>
                </div>
                <div className={styles.passwordContainer}>
                    <div className={styles.formGroup + ' ' + styles.formGroupPassword}>
                        <label htmlFor="password">Contraseña</label>
                        <div className={styles.inputIconContainer2}>
                            <input type="password" id="password" name="password" required placeholder="Ingresa tu contraseña"/>
                            <img src="/icon/bloquear.png" alt="icon" className={styles.inputIcon2} />
                        </div>
                    </div>
                    <div className={styles.formGroup + ' ' + styles.formGroupPassword}>
                        <label htmlFor="password">Confirmar Contraseña</label>
                        <div className={styles.inputIconContainer2}>
                            <input type="password" id="password2" name="password2" required placeholder="Repite tu contraseña"/>
                            <img src="/icon/bloquear.png" alt="icon" className={styles.inputIcon2} />
                        </div>
                    </div>
                </div>
                <div className={styles.dateButtonContainer}>
                    <div className={styles.formGroup + ' ' + styles.formGroupPassword}>
                        <label htmlFor="fecha">Fecha de Nacimiento</label>
                        <div className={styles.inputIconContainer2}>
                            <input type="date" id="fecha" name="fecha" required />
                            <img src="/icon/calendario.png" alt="icon" className={styles.inputIcon2} />
                        </div>
                    </div>
                    <button type="submit">Ingresar</button>
                </div>
            </form>
            
    )
}