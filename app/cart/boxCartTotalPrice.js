import React from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import useFinalPriceForProduct from "../store/useStateFinalPriceforProduct";

const BoxCartTotalPrice = () => {
	const {priceFinalForProduct} = useFinalPriceForProduct();
	const totalPurchase = priceFinalForProduct.reduce((acc, q) => {
		const value = Object.values(q)[0];
		return acc + value;
	}, 0);
	console.log("totalPurchase", totalPurchase);

	return (
		<Card sx={{minWidth: 275}}>
			<CardContent>
				<Typography sx={{fontWeight: 700}} variant='h6' gutterBottom>
					Total purchase
				</Typography>
				<Typography variant='body2'>
					Shipping cost : $ 0.00
					<br />
					Subtotal : $ {totalPurchase}
					<br />
					<hr style={{border: "1px solid black", margin: "10px 0"}} />
					TOTAL : $ {totalPurchase}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>Finalize purchase</Button>
			</CardActions>
		</Card>
	);
};

export default BoxCartTotalPrice;
