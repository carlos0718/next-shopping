"use client";
import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import RenderCategoriesItems from "./renderCategoriesItems";

const MenuItems = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<>
			<Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
				<RenderCategoriesItems closeMenu={handleCloseNavMenu} />
			</Box>
			<Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
				<IconButton
					size='large'
					aria-label='account of current user'
					aria-controls='menu-appbar'
					aria-haspopup='true'
					onClick={handleOpenNavMenu}
					color='inherit'
				>
					<MenuIcon />
				</IconButton>
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
					onClose={handleCloseNavMenu}
					sx={{
						display: {xs: "block", md: "none"},
					}}
				>
					{pages.map((page) => (
						<MenuItem key={page} onClick={handleCloseNavMenu}>
							<Typography textAlign='center'>{page}</Typography>
						</MenuItem>
					))}
				</Menu>
			</Box>
		</>
	);
};

export default MenuItems;
