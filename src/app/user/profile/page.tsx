import styles from './descripcion.module.css';
import FormPerfil from '@/components/user/descripcion/FormPerfil/FormPerfil';
import getCurrentUser from "@/app/actions/getCurrentUser";
import FormImagen from '@/components/user/imagen/FormImagen';

async function profile() {
  const currentUser = await getCurrentUser();

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Perfil</h2>
        </div>
        <p className="mt-1 text-center text-lg leading-6 text-gray-400">
            Edita tu información pública.
          </p>
        <div className='md:flex md:items-center gap-x-8'>
        <FormPerfil currentUser={currentUser!}/>
      </div>
      </div>
    </section>
  );
}

export default profile;