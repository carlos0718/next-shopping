"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Button, CardActionArea, CardActions, Grid} from "@mui/material";
import Link from "next/link";
import Loading from "./loading";

const Cards = ({product}) => {
	const {id, title, image} = product || {};
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		setLoading(true);
	}, []);

	return loading ? (
		<Grid item xs={2} sm={4} md={4}>
			<Card sx={{height: "30em"}}>
				<CardActionArea>
					<CardMedia
						component='img'
						src={image}
						alt={title}
						sx={{
							height: "290px",
							width: "auto",
							maxWidth: "100%",
							objectFit: "scale-down",
							margin: "auto",
						}}
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='div' sx={{maxHeight: "5em"}}>
							{title}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Link href={`/product/${id}`}>
						<Button size='small' color='primary'>
							View Detail
						</Button>
					</Link>
				</CardActions>
			</Card>
		</Grid>
	) : (
		<Loading />
	);
};

export default Cards;
