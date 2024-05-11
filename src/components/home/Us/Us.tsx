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
                        <p>La chica más increible que alguien puede conocer, es genial en todo lo que hace, patinar, programar, hacer pasteles, es la mejor y a quien más amo.</p>
                    </div>
                </div>
                <div className= {styles.SubGroup}>
                    <div className= {styles.Text}>           
                        <h2>José Pablo Aguirre Rivera</h2>
                        <div className={styles.line2} style={{ backgroundColor: '#009AAB' }}></div>
                        <div className= {styles.Image}>
                            <img src="/img/Jose.jpeg" alt="" />
                        </div>
                        <p>Un chico sencillo que quiere cumplir sus metas, apuntando al cielo el sabe, es un amante de los videojuegos y algun dia llegara a hacer uno del que se sienta orgulloso.</p>
                    </div>
                </div>
            </div>
            
        </section>
    )
};
