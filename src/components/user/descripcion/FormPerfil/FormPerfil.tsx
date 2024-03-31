import styles from "./FormPerfil.module.css"

export const FormPerfil = () => {
    return (
        <div className={styles.perfilForm}>
            <div className={styles.nombreGroup}>
                <label id="nombre">Jetix</label>
            </div>
            <div className={styles.imgGroup}>
            <img src="/icon/hombre.png" alt="icon" className={styles.imgPerfil}/>
            </div>
            <div className={styles.edadGroup}>
                <label>Edad: {" "}</label>
                <label id="edad">21</label>
            </div>
        </div>
)
}