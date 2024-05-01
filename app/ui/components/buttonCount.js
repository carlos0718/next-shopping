"use client";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {Box, Button, Typography} from "@mui/material";
import useQuantityStore from "./../../store/useQuantityStore";
import useQuantityHook from "./../../store/useQuantityHook";

const ButtonCount = ({product}) => {
	const {id} = product;
	const {quantities, increment, decrement} = useQuantityStore();
	// const quantities = useQuantityHook(useQuantityStore, state => state.quantities);
	const quantity = quantities[id] || 1;
	return (
		<Box sx={{display: "flex", justifyContent: "center", margin: 20}}>
			<Button variant='outlined' onClick={() => decrement(id)} disabled={quantity === 1}>
				<RemoveIcon />
			</Button>
			<Box sx={{marginX: 4}}>
				<Typography variant='h6'>{quantity}</Typography>
			</Box>
			<Button variant='outlined' onClick={() => increment(id)}>
				<AddIcon />
			</Button>
		</Box>
	);
};

export default ButtonCount;
