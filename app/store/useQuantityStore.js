import {create} from "zustand";

const useQuantityStore = create((set) => ({
	quantity: 1,
	increment: () => set((state) => ({quantity: state.quantity + 1})),
	decrement: () => set((state) => ({quantity: state.quantity - 1})),
	reset: () => set({quantity: 1}),
}));

export default useQuantityStore;
