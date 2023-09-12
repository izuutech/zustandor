import { create } from "zustand";
import { persist } from "zustand/middleware";

type TbearStoreState = {
  bears: number;
  color: string;
  size: string;
  increasePopulation: () => void;
  removeAllBears: () => void;
};
export const useBearStore = create<TbearStoreState>()(
  persist(
    (set) => ({
      bears: 0,
      color: "red",
      size: "big",
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
    }),
    {
      name: "bear store",
      // partialize: (state) => ({ bears: state.bears }) //to persist only a part
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !["size"].includes(key)) //persist all except size
        ),
    }
  )
);
