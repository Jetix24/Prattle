// actions/getEachUserItsInterest.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// actions/getEachUserItsInterest.ts
const getEachUserItsInterest = async (userId: string): Promise<string[]> => {
    try {
      const response = await fetch(`/api/getUserInterests?userId=${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user interests');
      }
      const data = await response.json();
      return data.interests;
    } catch (error) {
      console.error('Error fetching user interests:', error);
      return [];
    }
  };
  
  export default getEachUserItsInterest;
  
