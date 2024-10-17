import React from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import useFinalPriceForProduct from "@/app/store/useStateFinalPriceforProduct";
import {usePathname} from "next/navigation";
import Link from "next/link";

const BoxCartTotalPrice = () => {
	const pathname = usePathname();

	const {priceFinalForProduct} = useFinalPriceForProduct();
	const totalPurchase = priceFinalForProduct.reduce((acc, q) => {
		const value = Object.values(q)[0];
		return acc + value;
	}, 0);

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
					{/* <p style={{border: "1px solid black", margin: "10px 0"}}></p> */}
					TOTAL : $ {totalPurchase}
				</Typography>
			</CardContent>
			<CardActions>
				<Link href='../cart/checkout'>
					<Button size='small'>{pathname == "/cart" ? "Finalize purchase" : ""}</Button>
				</Link>
			</CardActions>
		</Card>
	);
};

export default BoxCartTotalPrice;
