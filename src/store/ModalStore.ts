import { create } from "zustand";

interface ModalStore {
  isOpen: boolean;
  selectedJersey: string | null;
  openModal: (image: string) => void;
  closeModal: () => void;
}

const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  selectedJersey: null,
  openModal: (image: string) => set({ isOpen: true, selectedJersey: image }),
  closeModal: () => set({ isOpen: false, selectedJersey: null }),
}));

export default useModalStore;
