import { create } from 'zustand';
import { User } from "@prisma/client";

export interface UserProfileModalInterface {
    user?: User;
    isOpen: boolean;
    openModal: (user: User) => void; 
    closeModal: () => void;
};

const useUserProfileModal = create<UserProfileModalInterface>((set) => ({
    userId: undefined,
    isOpen: false,
    openModal: (user: User) => set({ isOpen: true, user }),
    closeModal: () => set({ isOpen: false, user: undefined}),
}));

export default useUserProfileModal;