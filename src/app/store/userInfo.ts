import { create } from 'zustand';


interface UserInfo {
    text: "";
    setUser: (newText: "") => void;
}

export const useInformation = create<UserInfo>((set) => ({
    text: "",
    setUser: (newText) => set({ text: newText }),
}));