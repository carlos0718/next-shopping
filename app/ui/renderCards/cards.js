import React from "react";
import {Grid} from "@mui/material";
import {getProducts} from "@/app/lib/api";
import CardTempate from "./cardTemplate";

const Cards = async () => {
	const fetchProducts = await getProducts();
	return (
		<Grid container spacing={{xs: 2, md: 4}} columns={{xs: 4, sm: 8, md: 12}}>
			{fetchProducts.map((p) => {
				return (
					<Grid item xs={2} sm={4} md={4} key={p.id}>
						<CardTempate products={p} />
					</Grid>
				);
			})}
		</Grid>
	);
};

export default Cards;
