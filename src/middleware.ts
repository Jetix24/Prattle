import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: '/login',
    },
});

export const config = { //Esta funcion es para que el middleware se aplique solo en las rutas que se especifiquen
    matcher: [ //Aqui se especifican las rutas
        "/friends/:path*", //Se aplica en todas las rutas que empiecen con /users
        "/conversations/:path*",
        "/dashboard/:path*",
    ]
};