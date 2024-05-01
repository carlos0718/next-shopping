import {create} from "zustand";

const useQuantityStore = create((set) => ({
	quantities: {},
	increment: (id) => set((state) => ({quantities: {...state.quantities, [id]: (state.quantities[id] || 0) + 1}})),
	decrement: (id) => set((state) => ({quantities: {...state.quantities, [id]: state.quantities[id] - 1}})),
	reset: () => set({quantities: {}}),
}));

export default useQuantityStore;
