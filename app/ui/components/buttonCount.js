"use client";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {Box, Button, Typography} from "@mui/material";
import useQuantityStore from "./../../store/useQuantityStore";

const ButtonCount = ({product}) => {
	const {quantity, increment, decrement, reset} = useQuantityStore();
	console.log("product", product);
    React.useEffect(() => {
        if (product.hasOwnProperty("quantity")) {
            console.log("entraa al reset");
            reset;
        }
    }, [product]);
	console.log("quantity", quantity);
	return (
		<Box sx={{display: "flex", justifyContent: "center", margin: 20}}>
			<Button variant='outlined' onClick={decrement} disabled={quantity === 1}>
				<RemoveIcon />
			</Button>
			<Box sx={{marginX: 4}}>
				<Typography variant='h6'>{quantity}</Typography>
			</Box>
			<Button variant='outlined' onClick={increment}>
				<AddIcon />
			</Button>
		</Box>
	);
};

export default ButtonCount;
