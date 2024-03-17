import Link from "next/link"
import styles from "./Description.module.css"

export const Description = () => {
    return (
        <section>
          <div className={styles.Description}>
            <div className={styles.info}>
              <h2>Añade esa <span>chispa</span> a la conversación</h2>
              <p>Esta es la descripción</p>
              <a href="registro.html" className={styles.infoBtn}>Comienza ahora</a>
            </div>
          </div>
        </section>
    )
}
