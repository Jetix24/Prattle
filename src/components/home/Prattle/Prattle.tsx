import Link from "next/link"
import styles from "./Prattle.module.css"
import Image from 'next/image';

export const Prattle = () => {
return (
    <section className = {styles.Prattle}> 
        <div className= {styles.Group}>
            <div className= {styles.Image}>
                <img src="/img/adult.jpg" alt="" />
            </div>
            <div className= {styles.Text}>           
                <h2>Conoce Prattle</h2>
                <p>Sumérgete en el fascinante mundo de Prattle y descubre cómo nuestra aplicación está transformando la forma en que te comunicas. Conoce cómo Prattle personaliza tus conversaciones, ofreciéndote recomendaciones contextuales y facilitando interacciones.</p>
            </div>
        </div>
        <div className={styles.line} style={{ backgroundColor: '#FF2E6B', width: '70%', marginTop: '4%'}}></div>
        <div className={styles.line} style={{ backgroundColor: '#00DAA1', width: '60%'}}></div>
        <div className={styles.line} style={{ backgroundColor: '#FFC535', width: '50%'}}></div>
        <div className={styles.line} style={{ backgroundColor: '#009AAB', width: '40%'}}></div>

    </section>
    )
}
