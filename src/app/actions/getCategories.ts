import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

const getCategories = async () => {

    try{
        const Categories = await prisma.categories.findMany({
            orderBy: {
                name: 'asc',
            },
        });

        return Categories;
    }catch(error: any){
        return [];
    }
}

export default getCategories;