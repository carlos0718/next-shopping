"use client";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const RenderMenu = () => {
	const settings = [
		{link: "", name: "Logout"},
		{link: "../../../cart", name: "Carrito"},
	];
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<>
			<Box sx={{flexGrow: 0}}>
				<Tooltip title='Open settings'>
					<IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
						<Avatar alt='Carlos Jesús' src='' />
					</IconButton>
				</Tooltip>
				<Menu
					sx={{mt: "45px"}}
					id='menu-appbar'
					anchorEl={anchorElUser}
					anchorOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					keepMounted
					transformOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					open={Boolean(anchorElUser)}
					onClose={handleCloseUserMenu}
				>
					{settings.map((setting) => (
						<Link href={setting.link} key={setting.name}>
							<MenuItem key={setting.name} onClick={handleCloseUserMenu}>
								<Typography textAlign='center'>{setting.name}</Typography>
							</MenuItem>
						</Link>
					))}
				</Menu>
			</Box>
		</>
	);
};

export default RenderMenu;
