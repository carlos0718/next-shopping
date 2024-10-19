"use client";
import React from "react";
import ItemCart from "@/app/cart/itemCart";
import StateStorage from "@/app/store/stateStorage";
import {Box} from "@mui/material";
import Image from "next/image";
import {useStateStore} from "@/app/store/useCartStore";

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
				<Image src='/assets/images/empty-cart-illustration.gif' alt='empty-cart' width={500} height={500} />
			</Box>
		</div>
	);
};

export default ItemListCart;
