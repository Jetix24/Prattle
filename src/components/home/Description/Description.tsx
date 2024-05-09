import styles from "./Description.module.css"

export const Description = () => {
    return (
        <section>
          <div className={styles.Description}>
            <div className={styles.info}>
              <h2>Añade esa <span>chispa</span> a la conversación</h2>
              <p>Bienvenido a Prattle, tu plataforma de mensajería enriquecida con inteligencia artificial. Con Prattle, la conversación va más allá de las palabras; nuestra aplicación aprovecha la potencia de la IA para personalizar tus interacciones de manera única.</p>
              <a href="/signUp" className={styles.infoBtn}>Comienza ahora</a>
            </div>
          </div>
        </section>
    )
}
