"use client";
import React from "react";
import {Typography} from "@mui/material";
import ButtonCustom from "./buttonCustom";
import {useStateStore} from "@/app/store/useCartStore";
import useQuantityStore from "@/app/store/useQuantityStore";
import stateStorage from "@/app/store/stateStorage";

const ButtonAddToCart = ({product}) => {
	const {updateCart, cart} = useStateStore();
	const {quantities} = useQuantityStore();

	const handleClick = () => {
		let addProduct = {
			...product,
			quantity: quantities[product.id] || 1,
		};
		if (isProductInCartPosition() !== -1) {
			const newCart = cart.map((item) => {
				if (item.id === product.id) {
					item.quantity = quantities[product.id];
				}
				return item;
			});
			stateStorage.set("cart-storage", {state: {cart: newCart}});
		} else updateCart(addProduct);
	};

	//validate position in the cart
	const isProductInCartPosition = () => {
		const cart = stateStorage.get("cart-storage").state.cart;
		if (cart) {
			return cart.findIndex((item) => item.id === product.id);
		}
		return -1;
	};

	return (
		<>
			<ButtonCustom variant='contained' size='large' fullWidth onClick={handleClick}>
				<Typography variant='h6'>Add to cart</Typography>
			</ButtonCustom>
		</>
	);
};
export default ButtonAddToCart;
