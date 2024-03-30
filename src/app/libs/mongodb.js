import mongoose from 'mongoose';

export const connectMongoDB = async () => { 
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error', error);
    }
}