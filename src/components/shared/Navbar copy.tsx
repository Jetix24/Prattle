"use client"
import Link from 'next/link';
import {signIn, useSession, signOut} from 'next-auth/react';

function Navbar(){

    const {data:session} = useSession();

    // Esta función maneja el clic en el botón "Iniciar sesión"
    const handleSignIn = async () => {
        await signIn('google', { callbackUrl: '/dashboard' }); // Llama a signIn con la callbackUrl '/dashboard'
    };

    return (
        <nav className = "navigation">
            <img src="/img/logo_blanc.png" id="logo" alt="Logo" />
                    
            {session ?.user ? ( // Si el usuario está logueado
                <div className="flex gap-x-7 items-center text-white font-bold">
                    <p>Bienvenid@ {session.user.name}</p>
                    <img src={session.user.image} alt={session.user.name} className="h-10 w-10 rounded-full" />
                    <button onClick={async () => 
                        await signOut({
                            callbackUrl: `${window.location.origin}/`
                        })
                        }>Sign Out</button>
                </div>

            ) : ( //Y pues si no está logueado
            <>
            <div className="navigation">
                <button>Proyecto</button>
                <button>Sobre nosotros</button>
                <button onClick={() => signIn('google')}>Iniciar sesión</button>
                <button onClick={handleSignIn}>Registrate</button>
            </div>
            </>
            )}

            <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars menu-btn"></i>
                <i className="fas fa-times close-btn"></i>
            </label>
        </nav>
    )
}

export default Navbar;