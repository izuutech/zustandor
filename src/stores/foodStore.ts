import { create } from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";

type TFoodStoreState = {
  fish: number;
  //   addOneFish: () => void;
  //   removeOneFish: () => void;
  //   removeAllFish: () => void;
};
const initialFoodValue = {
  fish: 0,
};
export const useFoodStore = create<typeof initialFoodValue>()(
  subscribeWithSelector(persist(() => initialFoodValue, { name: "food store" }))
);

export const addOneFish = () =>
  useFoodStore.setState((state) => ({ fish: state.fish + 1 }));
export const removeOneFish = () =>
  useFoodStore.setState((state) => ({ fish: state.fish - 1 }));
export const removeAllFish = () =>
  useFoodStore.setState((state) => ({ fish: 0 }));
