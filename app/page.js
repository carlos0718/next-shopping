import "./globals.css";
import Cards from "./ui/renderCards/cards";

export default function Home() {
	return (
		<>
			<main className='container m-auto p-10'>
				<div className='mb-5'>
					<input type='text' placeholder='Search' className='border-2 border-gray-300 p-2 rounded-md' />
				</div>
				<Cards />
			</main>
		</>
	);
}
