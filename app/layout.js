import "./globals.css";
import {Container} from "@mui/material";
import NavBar from "./ui/header/header";

export const metadata = {
	title: "Ecommerce",
	description: "Ecommerce website using Nextjs and MUI",
};

export default function RootLayout({children}) {
	return (
		<html lang='en'>
			<body>
				<NavBar />
				<Container>
					<div className='m-20'>{/* <input type='text' placeholder='Search' className='border-2 border-gray-300 p-2 rounded-md' /> */}</div>
				</Container>
				<Container maxWidth='xl'>{children}</Container>
			</body>
		</html>
	);
}
