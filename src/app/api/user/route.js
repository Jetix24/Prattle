import { connectMongoDB } from 'src/app/libs/mongodb.js';
import User from 'src/models/user.js';
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export async function POST(request){
    const { name, email } = await request.json();
    await connectMongoDB();
    await User.create({ name, email });
    return NextResponse.json({ message: 'User created' }, { status: 201 });
}

export async function GET() {
    let client;
    try {
        await connectMongoDB();

        const uri = process.env.MONGODB_URI;
        const client = new MongoClient(uri);
        await client.connect();

        const collection = client.db("google_auth_test").collection("users");
        const users = await collection.find({}).toArray();

        return NextResponse.json(users);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: 'Error connecting to database' });
    } finally {
        if (client) {
            await client.close();
        }
    }
}