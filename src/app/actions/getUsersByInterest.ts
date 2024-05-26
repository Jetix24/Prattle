import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";
import getCurrentUser from "./getCurrentUser";

const getUsersByInterest = async () => {
    const session = await getSession();
    const currentUser = await getCurrentUser();
    
    if (!session?.user?.email) {
        return [];
    }

    try {
        const interestsWithUsers = await prisma.interests.findMany({
            orderBy: {
                name: 'asc',
            },
            include: {
                users: {
                    where: {
                        email: {
                            not: currentUser?.email, // Excluir al usuario actual por su correo electrónico
                        },
                    },
                },
            },
        });

        return interestsWithUsers;
    } catch (error: any) {
        return [];
    }
}

export default getUsersByInterest;
