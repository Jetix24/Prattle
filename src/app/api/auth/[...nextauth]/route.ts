import { connectMongoDB } from 'src/lib/mongodb.js';
import User from 'src/models/user.js';
import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    })],
    callbacks: {
        async signIn({user, account}) {

            if (account.provider === "google") {
                const {name, email} = user;
                try{
                    await connectMongoDB();
                    const userExist = await User.findOne({email});

                    if (!userExist) {
                        const res = await fetch("http://localhost:3000/api/user", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name,
                            email
                        })
                    });

                    if (res.ok) {
                        return true; //return user
                    } else {
                        // Stop the sign-in flow and redirect the user
                        return "/error";
                    }
                    }
                    
                } catch (error) {
                    console.log("Error: ", error);
                    return "/error";
                }
            }

            return true;
        }
    }
});

export {handler as GET, handler as POST}