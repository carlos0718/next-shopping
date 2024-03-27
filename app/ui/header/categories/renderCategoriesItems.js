import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

const RenderCategoriesItems = async ({closeMenu, categories}) => {
	return (
		<Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
			{categories.map((page) => (
				<Button key={page} onClick={closeMenu} sx={{my: 2, color: "white", display: "block"}}>
					{page}
				</Button>
			))}
		</Box>
	);
};

export default RenderCategoriesItems;

export const RenderCategoriasItemsResponsive = ({closeMenu, anchorElNav, categories}) => {
	return (
		<>
			<Menu
				id='menu-appbar'
				anchorEl={anchorElNav}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				keepMounted
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				open={Boolean(anchorElNav)}
				onClose={closeMenu}
				sx={{
					display: {xs: "block", md: "none"},
				}}
			>
				{categories.map((page) => (
					<MenuItem key={page} onClick={closeMenu}>
						<Typography textAlign='center'>{page}</Typography>
					</MenuItem>
				))}
			</Menu>
		</>
	);
};
