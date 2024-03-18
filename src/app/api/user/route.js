import { connectMongoDB } from 'src/lib/mongodb.js';
import User from 'src/models/user.js';
import { NextResponse } from 'next/server';

export async function POST(request){
    const { name, email } = await request.json();
    await connectMongoDB();
    await User.create({ name, email });
    return NextResponse.json({ message: 'User created' }, { status: 201 });
}