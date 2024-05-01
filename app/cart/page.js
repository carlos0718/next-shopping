"use client";
import React from "react";
import ItemCart from "./itemCart";
import stateStorage from "../store/stateStorage";

const ItemListCart = () => {
	const NAME_STORAGE = "cart-storage";
	const [cartState, setCartState] = React.useState([]);

	React.useEffect(() => {
		const {
			state: {cart},
		} = stateStorage.get(NAME_STORAGE) || {state: {cart: []}};
		setCartState(cart);
	}, []);

	return cartState.map((item) => (
		<ItemCart
			key={item.id}
			image={item.image}
			title={item.title}
			price={item.price}
			category={item.category}
			quantity={item.quantity}
			id={item.id}
		/>
	));
};

export default ItemListCart;
