'use client';

import {getCategories} from '@/app/lib/api';
import AdbIcon from '@mui/icons-material/Adb';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React from 'react';

import Categories from './categories/categoryItem';
import RenderMenu from './menu/menu';

const NavBar = React.forwardRef(() => {
	const [categories, setCategores] = React.useState([]);
	React.useEffect(() => {
		getCategories().then((data) => {
			setCategores(data);
		});
	}, []);

	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}} />
					<Link href={'/'}>
						<Typography
							variant='h6'
							noWrap
							sx={{
								mr: 2,
								display: {xs: 'none', md: 'flex'},
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none'
							}}
						>
							Shopping Next
						</Typography>
					</Link>
					{/* render categories page */}
					{/* <Categories xs='flex' md='none' categories={categories} /> */}
					<AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}} />
					<Link href={'/'}>
						<Typography
							variant='h5'
							noWrap
							sx={{
								mr: 2,
								display: {xs: 'flex', md: 'none'},
								flexGrow: 1,
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none'
							}}
						>
							Shopping Next
						</Typography>
					</Link>
					<Categories xs='none' md='flex' categories={categories} />
					{/* box render menu */}
					<RenderMenu />
				</Toolbar>
			</Container>
		</AppBar>
	);
});
NavBar.displayName = 'NavBar';
export default NavBar;
