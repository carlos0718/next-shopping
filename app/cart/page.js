"use client";
import React from "react";
import ItemCart from "./itemCart";
import StateStorage from "../store/stateStorage";
import {Box} from "@mui/material";
import {useStateStore} from "../store/useCartStore";

const ItemListCart = () => {
	const [cartState, setCartState] = React.useState([]);
	const {resetCart} = useStateStore();

	React.useEffect(() => {
		const {
			state: {cart},
		} = StateStorage.get() || {state: {cart: []}};
		setCartState(cart);
	}, []);

	const removeItem = (id) => {
		const cart = StateStorage.get().state.cart;

		const newCart = cart.filter((item) => item.id !== id);

		StateStorage.set({state: {cart: newCart}});

		newCart.length === 0 && resetCart();

		setCartState(newCart);
	};

	return cartState.length !== 0 ? (
		<div>
			{cartState.map((item) => (
				<ItemCart
					key={item.id}
					image={item.image}
					title={item.title}
					price={item.price}
					category={item.category}
					quantity={item.quantity}
					id={item.id}
					onRemove={removeItem}
				/>
			))}
		</div>
	) : (
		<div>
			<Box sx={{display: "flex", justifyContent: "center", mixBlendMode: "multiply"}}>
				<img src='/assets/images/empty-cart-illustration.gif' alt='empty-cart' />
			</Box>
		</div>
	);
};

export default ItemListCart;
