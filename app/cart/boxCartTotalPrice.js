import React from "react";
import {Button, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";

const BoxCartTotalPrice = () => {
	return (
		<Card sx={{minWidth: 275}}>
			<CardContent>
				<Typography sx={{fontWeight: 700}} variant='h6' gutterBottom>
					Total purchase
				</Typography>
				<Typography variant='body2'>
					well meaning and kindly.
					<br />
					{'"a benevolent smile"'}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>Learn More</Button>
			</CardActions>
		</Card>
	);
};

export default BoxCartTotalPrice;
