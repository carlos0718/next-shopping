"use client";
import React from "react";
import {Box, Container, Grid, Stack} from "@mui/material";
import BoxCartTotalPrice from "./boxCartTotalPrice";
import {useStateStore} from "../store/useCartStore";

const CartLayout = ({children}) => {
	const [existedItemInCart, setExistedItemInCart] = React.useState(false);
	const {cart} = useStateStore();

	React.useEffect(() => {
		setExistedItemInCart(cart.length !== 0);
	}, [cart]);

	return (
		<Container>
			<Box sx={{width: "100%"}}>
				<Grid container spacing={2}>
					<Grid item xs={existedItemInCart ? 8 : 12}>
						<Stack spacing={2}>{children}</Stack>
					</Grid>
					<Grid item xs={4}>
						{existedItemInCart && <BoxCartTotalPrice />}
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

export default CartLayout;
