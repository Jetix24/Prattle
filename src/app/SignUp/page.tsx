import Link from 'next/link'

export default function SignUp() {
    return (
        <div>
            <h1>Esta página aún no está lista</h1>
            <p>Haz clic <Link href="/logIn">aquí</Link> para iniciar sesión con Google</p>
            <button>
            <Link href="/logIn">Ir a Iniciar Sesión</Link>
            </button>
        </div>
    );
}
