"use client";
import React from "react";
import {Typography} from "@mui/material";
import ButtonCustom from "./buttonCustom";
import {useStateStore} from "@/app/store/useCartStore";
import useQuantityStore from "@/app/store/useQuantityStore";

const ButtonAddToCart = ({product}) => {
	const {updateCart} = useStateStore();
	const {quantities} = useQuantityStore();

	const handleClick = () => {
		let addProduct = {
			...product,
			quantity: quantities[product.id] || 1,
		};
		updateCart(addProduct);
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
