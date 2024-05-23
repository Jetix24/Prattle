import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse) 
{
    if (req.method === 'GET') {
        res.status(200).json({ name: "John Doe" });
    } else if (req.method === 'POST') {
        // Handle POST request
        // You might want to use req.body to access the data sent in the POST request
    } else {
        // Handle other HTTP methods or return an error message
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}