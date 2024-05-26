import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

const getUsersWithoutInterests = async () => {
    const session = await getSession();

    if (!session?.user?.email) {
        return [];
    }

    try {
        const allUsers = await prisma.user.findMany({
            where: {
                email: {
                    not: session.user.email,
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });

        const usersWithInterests = await prisma.user.findMany({
            where: {
                OR: [
                    {
                        interestsIds: {
                            equals: [], // Usuarios con interestsIds vacío
                        },
                    },
                    {
                        NOT: {
                            interestsIds: {
                                isEmpty: true, // Filtra usuarios que tienen interestsIds vacío o no definido
                            },
                        },
                    },
                ],
                email: {
                    not: session.user.email, // Excluye al usuario actual
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });

        // Filtrar usuarios sin intereses
        const usersWithoutInterests = allUsers.filter(user => !usersWithInterests.some(u => u.id === user.id));

        return usersWithoutInterests;
    } catch (error: any) {
        console.error("Error fetching users without interests:", error);
        return [];
    }
}

export default getUsersWithoutInterests;
