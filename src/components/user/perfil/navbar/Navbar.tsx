import Link from "next/link"
import styles from "./navbar.module.css"

export const Navbar = () => {
    return (
        <section className={styles.navPerfil}>
            <nav className={styles.navContainer}>
                <Link href="/">
                    <img src="/img/logo_blanc.png" className={styles.logoMarca} alt="Logo" />
                </Link>
                <form className={styles.formGroup}>
                    <div className={styles.inputIconContainer}>
                        <input type="text" id="buscar" name="buscar" required  placeholder="Buscar"/>
                        <img src="/icon/lupa.png" alt="icon" className={styles.inputIcon} />
                    </div>
                    <button type="submit">Buscar</button>
                </form>
                <div className={styles.linksContainer}>
                    <Link href="/user/chat" className={styles.link}>
                        <img src="/img/logo_seul.png" className={styles.logoSolo} alt="Logo" />
                    </Link>
                    <Link href="/user/configuracion" className={styles.linkC}>
                        <img src="/icon/hombre.png" className={styles.logoUsuario} alt="Logo" />
                    </Link>
                </div>
            </nav>
        </section>
    )
}