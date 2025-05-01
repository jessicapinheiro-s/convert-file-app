import { create } from 'zustand';

export type ModalStore = {
    modalStatus: boolean | null;
    setModalStatus: (novoValor: boolean) => void;
}

export const useModal = create<ModalStore>((set) => ({
    modalStatus: null, 
    setModalStatus: (novoValor: boolean) => set({ modalStatus: novoValor }),
    clearModalValue: () => set({ modalStatus: null }),
}));