"use client";
import React from "react";
import {Box, Typography} from "@mui/material";
import Link from "next/link";

const Footer = () => {
	return (
		<Box
			sx={{
				position: "bottom",
				bottom: 0,
				width: "100%",
				backgroundColor: (theme) => theme.palette.primary.main,
				color: "white",
				padding: 2,
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Link href='https://www.linkedin.com/in/carlos-jesus-dev/' target='_blank' rel='noreferrer noopener'>
				<Typography variant='body1'>© {new Date().getFullYear()} Carlos Jesus</Typography>
			</Link>
		</Box>
	);
};

export default Footer;
