import {create} from "zustand";
import {persist} from "zustand/middleware";

const useFinalPriceForProduct = create(
	persist(
		(set) => ({
			priceFinalForProduct: [],
			setFinalPriceForProduct: (id, finalPrice) =>
				set((state) => ({
					priceFinalForProduct: [...state.priceFinalForProduct.filter((q) => q.id !== id), {[id]: finalPrice}],
				})),
		}),
		{
			name: "final-price-storage",
		}
	)
);

export default useFinalPriceForProduct;
