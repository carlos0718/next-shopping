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
				{children}
			</body>
		</html>
	);
}
