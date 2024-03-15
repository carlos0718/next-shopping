import React from "react";

const Header = () => {
	return (
		<header className='w-full bg-gray-600'>
			<div className='container m-auto py-6 flex justify-between items-center'>
				<p className='text-4xl text-white'>
					S H O P P I N G <span className='pl-3 text-bold text-black'>Next</span>
				</p>
				<nav className='flex justify-between gap-2'>
					<a href='#' className='text-base p-3'>
						{" "}
						Enalce 1
					</a>
					<a href='#' className='text-base p-3'>
						{" "}
						Enalce 2
					</a>
					<a href='#' className='text-base p-3'>
						{" "}
						Enalce 3
					</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
