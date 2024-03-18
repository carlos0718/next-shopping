import Box from "@mui/joy/Box";
import Header from "./ui/header/header";
import Cards from "./ui/renderCards/cards";
import "./globals.css";

export default function Home() {
	return (
		<>
			<Header />
			<main className='container m-auto p-10'>
				<div className='mb-5'>
					<input type='text' placeholder='Search' className='border-2 border-gray-300 p-2 rounded-md' />
				</div>
				<Box
					sx={{
						width: "100%",
						maxWidth: 500,
						display: "grid",
						gridTemplateColumns: "repeat(auto-fill, minmax(300px, 4fr))",
						gap: 2,
					}}
				>
					<Cards />
				</Box>
			</main>
		</>
	);
}
