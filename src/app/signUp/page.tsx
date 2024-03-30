"use client";
import styles from './signUp.module.css'; 
import Link from 'next/link';
import { ButtonGoogle } from '@/components/registro/ButtonGoogle/ButtonGoogle';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function signUp() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session) {
      router.push('/dashboard');
    }
  }, [session, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: '',
      email: '',
      password: '',
      password2: '',
      bornDate: '',
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const bornDateISO = new Date(data.bornDate).toISOString();
      await axios.post('/api/register', {
        email: data.email,
        name: data.nombre,  // Aquí se envía correctamente el nombre desde el campo "nombre" del formulario
        password: data.password,
        bornDate: bornDateISO,
      });
      await signIn('credentials', {
        ...data,
        redirect: false,
      });
      router.push('/conversations');
    } catch (error) {
      toast.error('Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.formContainer}>
            <div className={styles.logoContainer}>
              <h2>Registro</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.signUpForm}>
              <div className={styles.formGroup}>
                <label htmlFor="nombre">Nombre</label>
                <div className={styles.inputIconContainer}>
                <input type="text" id="name" {...register('nombre', { required: true })} placeholder="Ingresa tu nombre" />
                  <img src="/icon/nombre.png" alt="icon" className={styles.inputIcon} />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Correo</label>
                <div className={styles.inputIconContainer}>
                  <input type="email" id="email" {...register('email', { required: true })} placeholder="Ingresa tu correo" />
                  <img src="/icon/correo.png" alt="icon" className={styles.inputIcon} />
                </div>
              </div>
              <div className={styles.passwordContainer}>
                <div className={styles.formGroup + ' ' + styles.formGroupPassword}>
                  <label htmlFor="password">Contraseña</label>
                  <div className={styles.inputIconContainer2}>
                    <input type="password" id="password" {...register('password', { required: true })} placeholder="Ingresa tu contraseña" />
                    <img src="/icon/bloquear.png" alt="icon" className={styles.inputIcon2} />
                  </div>
                </div>
                <div className={styles.formGroup + ' ' + styles.formGroupPassword}>
                  <label htmlFor="password2">Confirmar Contraseña</label>
                  <div className={styles.inputIconContainer2}>
                    <input type="password" id="password2" placeholder="Repite tu contraseña" />
                    <img src="/icon/bloquear.png" alt="icon" className={styles.inputIcon2} />
                  </div>
                </div>
              </div>
              <div className={styles.dateButtonContainer}>
                <div className={styles.formGroup + ' ' + styles.formGroupPassword}>
                  <label htmlFor="fecha">Fecha de Nacimiento</label>
                  <div className={styles.inputIconContainer2}>
                    <input type="date" id="bornDate" {...register('bornDate', { required: true })} />
                    <img src="/icon/calendario.png" alt="icon" className={styles.inputIcon2} />
                  </div>
                </div>
                <button type="submit" disabled={isLoading}>
                  {isLoading ? 'Cargando...' : 'Ingresar'}
                </button>
              </div>
            </form>
            <div className={styles.dividerContainer}>
              <div className={styles.line}></div>
              <span className={styles.orText}>o</span>
              <div className={styles.line}></div>
            </div>
            <ButtonGoogle />
            <div className={styles.loginPrompt}>
              ¿Ya tienes cuenta?{' '}
              <Link href="/logIn">
                Inicia Sesión
              </Link>
            </div>
          </div>
          <div className={styles.footer}>
            Al continuar, aceptas las condiciones del servicio
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </section>
  );
}
