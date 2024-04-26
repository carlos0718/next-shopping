import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import {Box, Button} from "@mui/material";
import {Grid} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ButtonCustom from "@/app/ui/components/buttonCustom";
import {getProductById} from "@/app/lib/api";
import ButtonAddToCart from "./../../ui/components/buttonAddToCart";

const ProductDetail = async ({params}) => {
	const {id} = params;
	const product = await getProductById(id);

	return (
		<Container>
			<Box sx={{flexGrow: 1, borderRadius: 2, boxShadow: 2, padding: 8, margin: 10}}>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<CardMedia component='img' src={product.image} alt={product.title} />
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
						<Box sx={{display: "flex", justifyContent: "center", margin: 20}}>
							<Button variant='outlined'>
								<RemoveIcon />
							</Button>
							<Box sx={{marginX: 4}}>
								<Typography variant='h6'>1</Typography>
							</Box>
							<Button variant='outlined'>
								<AddIcon />
							</Button>
						</Box>
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
