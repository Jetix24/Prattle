import React from 'react';
import { Description } from '@/components/home/Description';
import styles from './Home.module.css';
import { Navbar } from '@/components/home/Navbar';
import { Prattle } from '@/components/home/Prattle';

export default function Home() {
  return (
    <div className = {styles.Home}>
      
      <section >
        <div className = {styles.Inicio} style={{ backgroundImage: "url('/img/background_index.jpg')" }} >
          <Navbar />
          <Description />
        </div>
        <div className = {styles.Proyecto} >
        <div className={styles.Rectangle}></div> {/* Añade el rectángulo aquí */}
          <Prattle />
        </div>
      </section>
     </div> 
  );
}