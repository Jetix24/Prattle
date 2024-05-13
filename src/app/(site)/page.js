import React from 'react';
import { Description } from '@/components/home/Description';
import styles from './Home.module.css';
import { Navbar } from '@/components/home/Navbar';
import { Prattle } from '@/components/home/Prattle';
import { Characteristic } from '@/components/home/Characteristic';
import { Us } from '@/components/home/Us';
import { Footer } from '@/components/home/Footer';

export default function Home() {
  return (
    <div className = {styles.Home}>
      <section >
        <div className = {styles.Inicio}>
          <Navbar />
          <Description />
        </div>
        <div className = {styles.Proyecto}  id="proyecto">
          <Prattle />
        </div>
        <div className = {styles.Caracteristicas} >
          <Characteristic />
        </div>
        <div className = {styles.Nosotros}  id="nosotros" >
          <Us />
        </div>
        <div className = {styles.Footer} >
          <Footer />
        </div>
      </section>
     </div> 
  );
}