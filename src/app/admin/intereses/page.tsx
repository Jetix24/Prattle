// Intereses.tsx
import React from 'react';
import styles from './intereses.module.css';
import getCategories from '@/app/actions/getCategories';
import FormIntereses from '@/components/admin/intereses/FormIntereses/FormIntereses';

const Intereses = async () => {
  const categories = await getCategories();

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <FormIntereses categories={categories}/> 
        </div>
      </div>
    </section>
  );
};

export default Intereses;
