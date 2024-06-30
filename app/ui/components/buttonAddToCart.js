"use client";
import React from "react";
import {Alert, Snackbar, Typography} from "@mui/material";
import ButtonCustom from "./buttonCustom";
import {useStateStore} from "@/app/store/useCartStore";
import useQuantityStore from "@/app/store/useQuantityStore";
import StateStorage from "@/app/store/stateStorage";
import useFinalPriceForProduct from "@/app/store/useStateFinalPriceforProduct";

const ButtonAddToCart = ({product}) => {
	const {updateCart} = useStateStore();
	const {setFinalPriceForProduct} = useFinalPriceForProduct();
	const {quantities} = useQuantityStore();
	const [open, setOpen] = React.useState(false);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	const handleClick = () => {
		const addproductCart = {...product, quantity: quantities[product.id] ? quantities[product.id] : (quantities[product.id] = 1)};
		StateStorage.update(addproductCart);
		updateCart(addproductCart);
		handleFinalPrice(product.id);
		setOpen(true);
	};

	const handleFinalPrice = (id) => {
		const {state} = StateStorage.get();
		const item = state.cart.find((p) => p.id === id);
		const finalPrice = item.price * item.quantity;
		setFinalPriceForProduct(id, finalPrice);
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
