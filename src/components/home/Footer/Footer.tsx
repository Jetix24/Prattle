import Link from "next/link"
import styles from "./Footer.module.css"

export const Footer = () => {
return (
    <footer className = {styles.Footer}> 
        <div className= {styles.Group}>
            <div className= {styles.SubGroupLine}>
                <div className={styles.line} style={{ backgroundColor: '#FF2E6B', width: '100%'}}></div>
                <div className={styles.line} style={{ backgroundColor: '#00DAA1', width: '90%'}}></div>
                <div className={styles.line} style={{ backgroundColor: '#FFC535', width: '80%'}}></div>
                <div className={styles.line} style={{ backgroundColor: '#009AAB', width: '70%'}}></div>
            </div>
            <div className= {styles.SubGroup}>
                <img src="/img/logo_seul.png" alt="" />
                <div className= {styles.Icons}>
                    <img src="/img/facebook.png" alt="" />
                    <img src="/img/instagram.png" alt="" />
                    <img src="/img/twitter.png" alt="" />
                </div>
            </div>
            <div className= {styles.SubGroupLine}>
                <div className={styles.line2} style={{ backgroundColor: '#FF2E6B', width: '100%'}}></div>
                <div className={styles.line2} style={{ backgroundColor: '#00DAA1', width: '90%'}}></div>
                <div className={styles.line2} style={{ backgroundColor: '#FFC535', width: '80%'}}></div>
                <div className={styles.line2} style={{ backgroundColor: '#009AAB', width: '70%'}}></div>
            </div>
        </div>
        <p>Terminos y Condiciones</p>
        <p>© 2024 Prattle Systems, Inc.All Rights Reserved. Prattle and the Prattle logo are registered trademarks of Prattle Systems, Inc.</p>
    </footer>
    )
}
