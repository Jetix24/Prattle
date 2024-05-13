import Link from "next/link"
import styles from "./Characteristic.module.css"
import Image from 'next/image';

export const Characteristic = () => {
return (
    <section className = {styles.Characteristic}> 
        <div className= {styles.Title}>
            <h1>¿Qué nos diferencia?</h1>
            <div className={styles.line}></div>
        </div>
        <div className= {styles.Group1}>
            <div className= {styles.Image}>
                <img src="/img/Inteligencia.png" alt="" />
            </div>
            <div className= {styles.Text}>           
                <h2 style={{ color: '#009AAB' }}>Inteligencia Artificial Avanzada</h2>
                <p>Prattle utiliza una IA avanzada para enriquecer las conversaciones de los usuarios, proporcionando recomendaciones y personalizaciones únicas.</p>
            </div>
        </div>
        <div className={styles.line2} style={{ backgroundColor: '#009AAB' }}></div>

        <div className= {styles.Group2}>
            <div className= {styles.Text2}>           
                <h2 style={{ color: '#FFC535' }}>Personalización de Interacciones</h2>
                <p>La aplicación adapta las interacciones de acuerdo con las preferencias y el contexto del usuario, ofreciendo una experiencia de usuario altamente personalizada.</p>
            </div>
            <div className= {styles.Image2}>
                <img src="/img/Personalizacion.png" alt="" />
            </div>
        </div>
        <div className={styles.line3} style={{ backgroundColor: '#FFC535' }}></div>

        <div className= {styles.Group1} >
            <div className= {styles.Image}>
                <img src="/img/Mensajeria.png" />
            </div>
            <div className= {styles.Text}  style={{ marginTop: '3%' }}>           
                <h2 style={{ color: '#FF2E6B' }}>Mensajería Enriquecida</h2>
                <p>Además de las palabras, Prattle permite a los usuarios compartir una variedad de contenido, como imágenes, para una experiencia de mensajería más completa.</p>
            </div>
        </div>
        <div className={styles.line2} style={{ backgroundColor: '#FF2E6B' }}></div>

        <div className= {styles.Group2}>
            <div className= {styles.Text2}>           
                <h2 style={{ color: '#00DAA1' }}>Conversaciones Inteligentes</h2>
                <p>La IA de Prattle facilita conversaciones más inteligentes y significativas al proporcionar información útil, sugerencias relevantes y respuestas rápidas.</p>
            </div>
            <div className= {styles.Image2}>
                <img src="/img/Conversaciones.png" alt="" />
            </div>
        </div>
        <div className={styles.line3} style={{ backgroundColor: '#00DAA1' }}></div>

        <div className= {styles.Group1} >
            <div className= {styles.Image}>
                <img src="/img/Privacidad.png" />
            </div>
            <div className= {styles.Text}  style={{ marginTop: '3%' }}>           
                <h2 style={{ color: '#009AAB' }}>Privacidad y Seguridad</h2>
                <p>Prattle prioriza la privacidad y la seguridad de los datos de los usuarios, implementando medidas robustas para proteger la información personal y las conversaciones.</p>
            </div>
        </div>
        <div className={styles.line2} style={{ backgroundColor: '#009AAB' }}></div>

        <div className= {styles.Group2}>
            <div className= {styles.Text2} style={{ marginTop: '3%' }}>           
                <h2 style={{ color: '#FFC535' }}>Interfaz Intuitiva</h2>
                <p>La interfaz de usuario de Prattle es intuitiva y fácil de usar, lo que permite a los usuarios aprovechar al máximo las funcionalidades de la aplicación sin complicaciones.</p>
            </div>
            <div className= {styles.Image2}>
                <img src="/img/Interfaz.png" alt="" />
            </div>
        </div>
        <div className={styles.line3} style={{ backgroundColor: '#FFC535' }}></div>
    </section>
    )
}
