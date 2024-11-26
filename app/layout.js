import './globals.css';

import Footer from '@/app/ui/footer/page';
import NavBar from '@/app/ui/header/header';
import {Box, Container} from '@mui/material';

export const metadata = {
	title: 'Ecommerce',
	description: 'Ecommerce website using Nextjs and MUI'
};

export default function RootLayout({children}) {
	return (
		<html lang='en'>
			<body style={{backgroundColor: '#ebebeb'}}>
				<Container
					disableGutters
					maxWidth={false}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						minHeight: '100vh'
					}}
				>
					<Box sx={{marginBottom: '100px', flex: '1 0 auto', marginBottom: '100px'}}>
						<NavBar />
						<Container maxWidth='xl'>{children}</Container>
					</Box>
					<Box sx={{flexShrink: 0}}>
						<Footer />
					</Box>
				</Container>
			</body>
		</html>
	);
}
