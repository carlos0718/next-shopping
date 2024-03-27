"use client";
import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import RenderCategoriesItems, {RenderCategoriasItemsResponsive} from "./renderCategoriesItems";

const Categories = ({xs, md, categories}) => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<>
			{xs === "flex" && md === "none" ? (
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
					<RenderCategoriasItemsResponsive closeMenu={handleCloseNavMenu} anchorElNav={anchorElNav} categories={categories} />
				</Box>
			) : (
				<RenderCategoriesItems closeMenu={handleCloseNavMenu} categories={categories} />
			)}
		</>
	);
};

export default Categories;
