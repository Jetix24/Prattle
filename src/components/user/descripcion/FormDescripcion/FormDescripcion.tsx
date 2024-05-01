'use client'

import React, { useEffect, useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import styles from "./FormDescripcion.module.css"
import Link from 'next/link';

registerPlugin(FilePondPluginImagePreview, FilePondPluginImageResize, FilePondPluginFileEncode);

export const FormDescripcion = () => {
    const [coverWidth, setCoverWidth] = useState<number | undefined>(undefined);
    const [coverHeight, setCoverHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const coverWidthValue = 300; // Reemplaza 230 con el valor que desees para el ancho de la portada
    const coverAspectRatio = .75; // Reemplaza 0.75 con el valor que desees para el aspecto de la portada
    const coverHeightValue = coverWidthValue / coverAspectRatio;

    setCoverWidth(coverWidthValue);
    setCoverHeight(coverHeightValue);
  }, [])

  return (
    <form className={styles.descripcionForm}>
        <div className={styles.inputContainers}>
            <div className={styles.leftContainer}>
                <div className={styles.formGroup}>
                    <label htmlFor="portada">Portada</label>
                    
                    <FilePond
                    className={styles.filePond}
                    name="portada"
                    required
                    imageResizeTargetWidth={coverWidth}
                    imageResizeTargetHeight={coverHeight}
                    />
                </div>
            </div>
            <div className={styles.rightContainer}>
                    <div className={styles.formGroup}>
                        <label htmlFor="titular">Titular</label>
                            <textarea id="titular" name="titular" required placeholder="Ingresa tu titular"/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="acerca">Acerca de ti</label>
                            <textarea id="acerca" name="acerca" required placeholder="Ingresa algo que te describa"/>
                    </div>
            </div>
        </div>
        <Link href="/user/intereses">
        <button type="submit">Enviar</button>
        </Link>
        </form>
    )
}