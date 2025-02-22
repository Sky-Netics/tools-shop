import { create } from 'zustand';
import { authResponseProps } from '../interfaces/authResponse';

interface StoreState {
    text: authResponseProps|string;
    setText: (newText: authResponseProps|string) => void;
}

export const useText = create<StoreState>((set) => ({
    text: "",
    setText: (newText) => set({ text: newText }),
}));


interface State {
    visible: boolean;
    setVisible: (newValue: boolean) => void;
}

export const useVisible = create<State>((set) => ({
    visible: false,
    setVisible: (newValue: boolean) => set({ visible: newValue }),
}));