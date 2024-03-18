import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Avatar from "@mui/material/Avatar";
import {deepOrange} from "@mui/material/colors";

const Header = () => {
	return (
		<header className=' w-full bg-blue-600 px-12 py-7 flex justify-between items-center'>
			<p className='text-4xl text-white'>
				S H O P P I N G <span className='pl-3 text-bold text-black'>Next</span>
			</p>
			<nav className='flex gap-2 justify-between items-center'>
				<section>
					<a href='#' className='text-base p-3'>
						Enalce 1
					</a>
					<a href='#' className='text-base p-3'>
						Enalce 2
					</a>
					<a href='#' className='text-base p-3'>
						Enalce 3
					</a>
					<a href='#' className='text-base p-3'>
						Enalce 4
					</a>
				</section>
				<section>
					<a href='#' className='text-base p-3'>
						<LocalMallIcon fontSize='large' />
					</a>
				</section>
			</nav>
			<div>
				<Avatar sx={{bgcolor: deepOrange[500]}}>N</Avatar>
			</div>
		</header>
	);
};

export default Header;
