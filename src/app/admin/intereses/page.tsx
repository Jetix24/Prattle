import React from 'react';
import getCategories from '@/app/actions/getCategories';
import FormIntereses from '@/components/admin/intereses/FormIntereses/FormIntereses';
import styles from './Intereses.module.css';

export default async function Intereses() {
  const categories = await getCategories();

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <FormIntereses categories={categories} />
        </div>
      </div>
    </section>
  );
}
