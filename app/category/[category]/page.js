import {Container, Grid} from "@mui/material";
import {getProductsByCategory} from "../../lib/api";
import Cards from "../../ui/renderCards/card";

const Products = async ({params}) => {
	const {category} = params;
	const fetchProduct = await getProductsByCategory(category);
	return (
		<>
			<Container>
				<Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
					{fetchProduct.map((product) => (
						<Cards key={product.id} product={product} />
					))}
				</Grid>
			</Container>
		</>
	);
};

export default Products;
