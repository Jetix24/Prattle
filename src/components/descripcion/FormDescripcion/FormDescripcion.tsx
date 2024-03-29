import Link from "next/link"
import styles from "./FormDescripcion.module.css"
import { Description } from '../../home/Description/Description';

export const FormDescripcion = () => {
    return (
            <form className={styles.descripcionForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="portada">Portada</label>
                        <input type="file" id="portada" name="portada" required placeholder="Cargar imagen o arrastra un archivo pega la imagen o el URL"/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="titular">Titular</label>
                        <input type="text" id="titular" name="titular" required placeholder="Ingresa tu titular"/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="acerca">Acerca de ti</label>
                        <input type="text" id="acerca" name="acerca" required placeholder="Ingresa algo que te describa"/>
                </div>
            </form>
    )
}