"use client";
import React from "react";
import ItemCart from "./itemCart";
import stateStorage from "../store/stateStorage";

const ItemListCart = () => {
	const NAME_STORAGE = "cart-storage";
	const {
		state: {cart},
	} = stateStorage.get(NAME_STORAGE) || {state: {cart: []}};
	console.log("cart", cart);
	return cart.map((item) => (
		<ItemCart key={item.id} image={item.image} title={item.title} price={item.price} category={item.category} quantity={item.quantity} />
	));
};

export default ItemListCart;
