import {getProducts} from '@/app/lib/api';
import InputSearch from '@/app/ui/components/inputSearch';
import Cards from '@/app/ui/renderCards/card';
import {Container, Grid, StyledEngineProvider} from '@mui/material';

export default async function Home() {
	const fetchProducts = await getProducts();
	return (
		<StyledEngineProvider injectFirst>
			<InputSearch />
			<Container>
				<Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
					{fetchProducts.map((product) => (
						<Cards product={product} key={product.id} />
					))}
				</Grid>
			</Container>
		</StyledEngineProvider>
	);
}
