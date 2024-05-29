// pages/api/getUserInterests.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getUserInterests = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId } = req.query;

  if (!userId || typeof userId !== 'string') {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        interests: true,
      },
    });

    if (!user || !user.interests) {
      return res.status(404).json({ error: 'User or interests not found' });
    }

    const interests = user.interests.map((interest) => interest.name).filter((name): name is string => name !== null);

    res.status(200).json({ interests });
  } catch (error) {
    console.error('Error fetching user interests:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default getUserInterests;
