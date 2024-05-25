import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/app/libs/prismadb";

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse) 
{
    if (req.method === 'GET'){
        try{
            const { q:query } = req.query;

            if(typeof query !== 'string'){
                throw new Error('Invalid query');
            }

            const users = await prisma.user.findMany({
                where: {
                    OR: [
                        {
                            name: {
                                contains: query,
                                mode: 'insensitive'
                            }
                        }
                    ]
                }
            });

            res.status(200).json({users}); // Aqui regresa 
        } catch (error) {
            res.status(500).end();
        }
    }
}