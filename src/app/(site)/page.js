import React from 'react';
import { Description } from '@/components/home/Description';
import styles from './Home.module.css';
import { Navbar } from '@/components/home/Navbar';


export default function Home() {
  return (
    <div className = {styles.Home} >
      <section >
        <Navbar />
        <Description />
      </section>
    </div>
  );
}