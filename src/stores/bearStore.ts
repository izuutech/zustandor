import { create } from "zustand";

type TbearStoreState = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
};
export const useBearStore = create<TbearStoreState>()((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
