import {create} from "zustand";
import {persist} from "zustand/middleware";

export const useStateStore = create(
	persist(
		(set, get) => ({
			cart: [],
			updateCart: (product) => set((state) => ({cart: [...state.cart, product]})),
		}),
		{
			name: "cart-storage",
		}
	)
);
