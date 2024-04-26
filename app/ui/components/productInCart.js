import {Image} from "@mui/icons-material";
import {Box, Container, Grid, Typography} from "@mui/material";

const ProductInCart = ({product}) => {
	return (
		<Container>
			<Box>
				<Grid container>
					<Grid item xs={12} md={3}>
						<Image src={product.image} alt={product.name} />
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography variant='h5'>{product.name}</Typography>
					</Grid>
					<Grid item xs={12} md={3}>
						<Typography>${product.price}</Typography>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

export default ProductInCart;
