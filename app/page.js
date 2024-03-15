import Header from "./components/header/header";
import "./globals.css";

export default function Home() {
	return (
		<>
			<Header />
			<main className='container m-auto'>
				<h1 className='text-2xl text-blue-600 font-bold my-4'>Hello, World!</h1>
			</main>
		</>
	);
}
