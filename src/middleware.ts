export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard"] } //Se va a proteger la ruta /dashboard