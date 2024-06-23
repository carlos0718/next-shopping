"use client";
import React from "react";
import {Alert, Snackbar, Typography} from "@mui/material";
import ButtonCustom from "./buttonCustom";
import {useStateStore} from "@/app/store/useCartStore";
import useQuantityStore from "@/app/store/useQuantityStore";
import StateStorage from "@/app/store/stateStorage";

const ButtonAddToCart = ({product}) => {
	const {updateCart, cart} = useStateStore();
	const {quantities} = useQuantityStore();
	const [open, setOpen] = React.useState(false);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	const handleClick = () => {
		const addproductCart = {...product, quantity: quantities[product.id]};
		StateStorage.update(addproductCart);
		updateCart(addproductCart);
		setOpen(true);
	};

	return (
		<>
			<ButtonCustom variant='contained' size='large' fullWidth onClick={handleClick}>
				<Typography variant='h6'>Add to cart</Typography>
			</ButtonCustom>
			<Snackbar open={open} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{vertical: "bottom", horizontal: "right"}}>
				<Alert onClose={handleClose} severity='primary' variant='filled'>
					Product added to cart
				</Alert>
			</Snackbar>
		</>
	);
};
export default ButtonAddToCart;
