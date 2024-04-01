import {Box, Button, Container, Typography} from "@mui/material";
import Link from "next/link";

const NotFound = () => {
	return (
		<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
			<Box my={4}>
				<Typography variant='h3'>404 - Page Not Found</Typography>
				<Typography display='flex' justifyContent='center' variant='subtitle1'>
					Lo sentimos, la página que estás buscando no existe.
				</Typography>
			</Box>
			<Link href='/'>
				<Button variant='contained'>Ir a Home</Button>
			</Link>
		</Box>
	);
};

export default NotFound;
