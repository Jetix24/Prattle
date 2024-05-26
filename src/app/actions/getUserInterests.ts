import { User } from "@prisma/client";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from './getCurrentUser';

const getUserInterests = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser?.id) {
    return [];
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: currentUser.id },
      include: { interests: true }
    });

    if (!user) {
      return [];
    }

    // Extraer solo los IDs de los intereses
    const interestIds = user.interests.map(interest => interest.id);

    return interestIds;
  } catch (error: any) {
    return [];
  }
};

export default getUserInterests;