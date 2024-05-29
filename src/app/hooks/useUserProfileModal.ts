// hooks/useUserProfileModal.ts
import { create } from 'zustand';
import { User } from '@prisma/client';
import getEachUserItsInterest from '@/app/actions/getEachUserItsInterest';

export interface UserProfileModalInterface {
  user?: User;
  interests: string[];
  isOpen: boolean;
  openModal: (user: User) => void;
  closeModal: () => void;
}

const useUserProfileModal = create<UserProfileModalInterface>((set) => ({
  user: undefined,
  interests: [],
  isOpen: false,
  openModal: async (user: User) => {
    try {
      const interests = await getEachUserItsInterest(user.id);
      set({ isOpen: true, user, interests });
    } catch (error) {
      console.error('Failed to fetch user interests:', error);
    }
  },
  closeModal: () => set({ isOpen: false, user: undefined, interests: [] }),
}));

export default useUserProfileModal;
