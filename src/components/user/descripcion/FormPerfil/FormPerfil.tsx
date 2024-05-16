"use client";
import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import styles from "./FormPerfil.module.css";
import {User} from "@prisma/client";

interface FormPerfilProps {
    currentUser: User
}

const FormPerfil: React.FC<FormPerfilProps> = (
    {currentUser}
) => {
   
    return (
        <div className={styles.perfilForm}>
            <div className={styles.nombreGroup}>
                <label id="nombre">{currentUser.name}</label>
            </div>
            <div className={styles.imgGroup}>
                <img src="/img/adult.jpg" alt="icon" className={styles.imgPerfil}/> {/* Asegúrate de que 'image' es un campo en tu objeto User */}
            </div>
            <div className={styles.edadGroup}>
                <label>Edad: {" "}</label>
                <label id="edad">21</label> {/* Asegúrate de que 'age' es un campo en tu objeto User */}
            </div>
        </div>
    )
}


export default FormPerfil;