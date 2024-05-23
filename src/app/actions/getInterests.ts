import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

const getInterests = async () => {
    const session = await getSession();
    if (!session?.user?.email) {
        return [];
    }

    try{
        const Interests = await prisma.interests.findMany({
            orderBy: {
                name: 'asc',
            },
        });

        return Interests;
    }catch(error: any){
        return [];
    }
}

export default getInterests;