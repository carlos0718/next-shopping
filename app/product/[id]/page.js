import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import {Box} from "@mui/material";
import {Grid} from "@mui/material";
import {getProductById} from "@/app/lib/api";

const ProductDetail = async ({params}) => {
	const {id} = params;
	const product = await getProductById(id);
	return (
		<>
			<Container>
				<Box sx={{flexGrow: 1, borderRadius: 2, boxShadow: 2, padding: 3}}>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<CardMedia component='img' src={product.image} alt={product.title} />
						</Grid>
						<Grid item xs={6}>
							<Box>
								<Typography variant='h3'>{product.title}</Typography>
							</Box>
						</Grid>
						<Grid item xs={12}>
							<Typography variant='h5'>{product.description}</Typography>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</>
	);
};

export default ProductDetail;
