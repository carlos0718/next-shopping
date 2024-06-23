import {create} from "zustand";
import {persist, createJSONStorage} from "zustand/middleware";

export const useStateStore = create(
	persist(
		(set) => ({
			cart: [],
			updateCart: (product) => set((state) => ({cart: [...state.cart.filter((p) => p.id !== product.id), product]})),
			deleteItemCart: (itemId) => set((state) => ({cart: state.cart.filter((item) => item.id !== itemId)})),
			resetCart: () => set({cart: []}),
		}),
		{
			name: "cart-storage",
			storage: createJSONStorage(() => localStorage),
		}
	)
);
