import Cards from "./ui/renderCards/card";
import {Container, Grid} from "@mui/material";
import {getProducts} from "@/app/lib/api";

export default async function Home() {
	const fetchProducts = await getProducts();
	return (
		<>
			<Container>
				<Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
					{fetchProducts.map((product) => (
						<Cards product={product} key={product.id} />
					))}
				</Grid>
			</Container>
		</>
	);
}
