import styles from './perfil.module.css'; 
import Link from 'next/link';
import Navbar from '@/components/user/perfil/navbar/Navbar';
import { FormPerfil} from '@/components/user/perfil/FormPerfil/FormPerfil';


export default function perfil() {
        return (
            <section>
                <div className={styles.container}>
                    <Navbar className={styles.navbarb} />
                    <FormPerfil/>
                </div>
            </section>
        );
    }
