import {create} from "zustand";
import {persist} from "zustand/middleware";

const useFinalPriceForProduct = create(
	persist(
		(set) => ({
			priceFinalForProduct: [],
			totalPurchase: () =>
				set((state) =>
					state.priceFinalForProduct.reduce((acc, q) => {
						const value = Object.values(q)[0];
						return acc + value;
					}, 0)
				),
			setFinalPriceForProduct: (id, finalPrice) =>
				set((state) => ({
					priceFinalForProduct: [
						...state.priceFinalForProduct.filter((q) => {
							const key = Object.keys(q)[0];
							return Number(key) !== id;
						}),
						{[id]: finalPrice},
					],
				})),
		}),
		{
			name: "final-price-storage",
		}
	)
);

export default useFinalPriceForProduct;
