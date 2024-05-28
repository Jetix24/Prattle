import Link from "next/link"
import styles from "./Us.module.css"
import Image from 'next/image';

export const Us = () => {
    return (
        <section className = {styles.Us}> 
            <div className= {styles.Title}>
                <h1>Sobre nosotros</h1>
                <div className={styles.line}></div>
            </div>
            <div className= {styles.Group}>
                <div className= {styles.SubGroup} style={{ marginRight: '5%' }}>
                    <div className= {styles.Text}>           
                        <h2>Fernanda Isabel Vazquez Muñoz</h2>
                        <div className={styles.line2} style={{ backgroundColor: '#FF2E6B' }}></div>
                        <div className= {styles.Image}>
                            <img src="/img/Fer.jpeg" alt="" />
                        </div>
                        <p>Soy estudiante de Ingeniería Informática apasionada por 
                            la programación en diversos lenguajes de programación. 
                            Me considero una persona proactiva y con habilidades de liderazgo. </p>
                    </div>
                </div>
                <div className= {styles.SubGroup}>
                    <div className= {styles.Text}>           
                        <h2>José Pablo Aguirre Rivera</h2>
                        <div className={styles.line2} style={{ backgroundColor: '#009AAB' }}></div>
                        <div className= {styles.Image}>
                            <img src="/img/Jose.jpeg" alt="" />
                        </div>
                        <p>Estudiante de Ingeniería en Sistemas Computacionales con
                            experiencia en diversos lenguajes de programación. Me 
                            considero una persona proactiva, organizada y 
                            capaz de resolver cualquier problema.</p>
                    </div>
                </div>
            </div>
            <div className={styles.line3} style={{ backgroundColor: '#FF2E6B', width: '70%'}}></div>
            <div className={styles.line3} style={{ backgroundColor: '#00DAA1', width: '60%'}}></div>
            <div className={styles.line3} style={{ backgroundColor: '#FFC535', width: '50%'}}></div>
            <div className={styles.line3} style={{ backgroundColor: '#009AAB', width: '40%', marginBottom:'10%'}}></div>
        </section>
    )
};
