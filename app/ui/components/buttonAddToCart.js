"use client";
import React from "react";
import {Typography} from "@mui/material";
import ButtonCustom from "./buttonCustom";
import {useStateStore} from "../../../store/useStore";

const ButtonAddToCart = ({product}) => {
	const {updateCart, cart} = useStateStore();
	const handleClick = () => updateCart(product);
	React.useEffect(() => {
		console.log(useStateStore.getState());
	}, [cart]);
	return (
		<>
			<ButtonCustom variant='contained' size='large' fullWidth onClick={handleClick}>
				<Typography variant='h6'>Add to cart</Typography>
			</ButtonCustom>
		</>
	);
};
export default ButtonAddToCart;
