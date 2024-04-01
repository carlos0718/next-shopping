import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Button, CardActionArea, CardActions, Grid} from "@mui/material";

const Cards = ({product}) => {
	const {id, title, description, image, price, category} = product;
	return (
		<Grid item xs={2} sm={4} md={4}>
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
		</Grid>
	);
};

export default Cards;
