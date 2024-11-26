import {getProductsByCategory} from '@/app/lib/api';
import InputSearch from '@/app/ui/components/inputSearch';
import Cards from '@/app/ui/renderCards/card';
import {Container, Grid} from '@mui/material';

const Products = async ({params}) => {
	const {category} = params;
	const fetchProduct = await getProductsByCategory(category);
	return (
		<>
			<Container>
				<InputSearch />
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
