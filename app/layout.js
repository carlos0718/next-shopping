import "./globals.css";
import {Box, Container} from "@mui/material";
import NavBar from "./ui/header/header";
import Footer from "./ui/footer/page";

export const metadata = {
	title: "Ecommerce",
	description: "Ecommerce website using Nextjs and MUI",
};

export default function RootLayout({children}) {
	return (
		<html lang='en'>
			<body style={{backgroundColor: "#ebebeb"}}>
				<Container
					disableGutters
					maxWidth={false}
					sx={{
						display: "flex",
						flexDirection: "column",
						minHeight: "100vh",
					}}
				>
					<Box sx={{marginBottom: "100px", flex: "1 0 auto", marginBottom: "100px"}}>
						<NavBar />
						<Container>
							<div className='m-20'>
								{/* <input type='text' placeholder='Search' className='border-2 border-gray-300 p-2 rounded-md' /> */}
							</div>
						</Container>
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
