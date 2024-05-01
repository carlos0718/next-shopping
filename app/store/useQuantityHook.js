import React from "react";

const useQuantityHook = ({state, callback}) => {
	const quantities = state(callback);
	const [quantity, setQuantity] = React.useState();

	React.useEffect(() => {
		setQuantity(quantities);
	}, [quantities]);
	return quantity;
};

export default useQuantityHook;
