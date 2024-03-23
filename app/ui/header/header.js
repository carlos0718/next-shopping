import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import RenderCategoriesItems from "./categories/renderCategoriesItems";
import RenderMenu from "./menu/menu";

function NavBar() {
	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<AdbIcon sx={{display: {xs: "none", md: "flex"}, mr: 1}} />
					<Typography
						variant='h6'
						noWrap
						component='a'
						href='#app-bar-with-responsive-menu'
						sx={{
							mr: 2,
							display: {xs: "none", md: "flex"},
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						LOGO
					</Typography>
					{/* render categories page */}
					<RenderCategoriesItems />
					<AdbIcon sx={{display: {xs: "flex", md: "none"}, mr: 1}} />
					<Typography
						variant='h5'
						noWrap
						component='a'
						href='#app-bar-with-responsive-menu'
						sx={{
							mr: 2,
							display: {xs: "flex", md: "none"},
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						LOGO
					</Typography>
					{/* box render menu */}
					<RenderMenu />
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default NavBar;
