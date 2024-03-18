import styles from "./Description.module.css"

export const Description = () => {
    return (
        <section>
          <div className={styles.Description}>
            <div className={styles.info}>
              <h2>Añade esa <span>chispa</span> a la conversación</h2>
              <p> Con Prattle, la conversación va más allá de las palabras; nuestra aplicación aprovecha la potencia de la IA para personalizar tus interacciones de manera única</p>
              <a href="registro.html" className={styles.infoBtn}>Comienza ahora</a>
            </div>
          </div>
        </section>
    )
}
