import Link from "next/link"
import styles from "./FormPerfil.module.css"

export const FormPerfil = () => {
    return (
        <form className={styles.perfilForm}>
            <div className={styles.nombreGroup}>
                <label>Nombre</label>
            </div>
            <div className={styles.imgGroup}>
            <img src="/icon/correo.png" alt="icon" className={styles.imgPerfil}/>
            </div>
            <div className={styles.fechaGroup}>
                <label>Edad: {" "}</label>
                <label id="edad">21</label>
            </div>
        </form>
)
}