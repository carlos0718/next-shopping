import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Button, CardActionArea, CardActions} from "@mui/material";

const CardTempate = ({products}) => {
	console.log("products>> ", products);
	const {id, title, description, image, price, category} = products;
	return (
		<div className='m-5'>
			<Card sx={{maxWidth: 345}}>
				<CardActionArea>
					<CardMedia component='img' height='140' image={image} alt={title} />
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							{title}
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							{description}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size='small' color='primary'>
						View Detail
					</Button>
				</CardActions>
			</Card>
		</div>
	);
};

export default CardTempate;
