import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import {Box} from "@mui/material";
import {Grid} from "@mui/material";
import ButtonCustom from "@/app/ui/components/buttonCustom";
import {getProductById} from "@/app/lib/api";
import ButtonAddToCart from "./../../ui/components/buttonAddToCart";
import ButtonCount from "./../../ui/components/buttonCount";

const ProductDetail = async ({params}) => {
	const {id} = params;
	const product = await getProductById(id);

	return (
		<Container>
			<Box sx={{flexGrow: 1, borderRadius: 2, boxShadow: 2, padding: 8, margin: 10}}>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<CardMedia component='img' src={product.image} alt={product.title} sx={{mixBlendMode: "multiply"}} />
					</Grid>
					<Grid item xs={6}>
						<Box sx={{marginX: 3}}>
							<Typography variant='h3'>{product.title}</Typography>
						</Box>
						<Box sx={{marginTop: 3, marginLeft: 3}}>
							<ButtonCustom variant='outlined'>
								<Typography variant='h6'>${product.price}</Typography>
							</ButtonCustom>
						</Box>
						<ButtonCount product={product} />
						<Box sx={{display: "flex", justifyContent: "center"}}>
							<ButtonAddToCart product={product} />
						</Box>
					</Grid>
					<Grid item xs={12}>
						<Typography variant='h5'>{product.description}</Typography>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

export default ProductDetail;
