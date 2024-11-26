'use client';

import ButtonCustom from '@/app/ui/components/buttonCustom';
import Loading from '@/app/ui/renderCards/loading';
import {CardActionArea, CardActions, Grid, Stack} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React from 'react';

const Cards = ({product}) => {
	const {id, title, image, price} = product || {};
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(true);
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	if (!loading) {
		return <Loading />;
	}

	return (
		<Grid item xs={2} sm={4} md={4}>
			<Card sx={{height: '27em'}}>
				<CardActionArea>
					<CardMedia
						component='img'
						src={image}
						alt={title}
						sx={{
							height: '290px',
							width: 'auto',
							maxWidth: '100%',
							objectFit: 'scale-down',
							margin: 'auto',
							padding: '20px'
						}}
					/>
					<CardContent>
						<Typography gutterBottom variant='h6' align='center' color='#527ba5' component='div' sx={{maxHeight: '3em'}} noWrap>
							{title}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Stack useFlexGap direction='row' sx={{justifyContent: 'space-around', alignItems: 'center', width: '100%'}}>
						<Link href={`/product/${id}`}>
							<ButtonCustom size='small' color='primary' sx={{padding: '8px 16px'}}>
								View Detail
							</ButtonCustom>
						</Link>
						<Typography variant='h6' color='primary' sx={{fontWeight: 600}}>
							${price}
						</Typography>
					</Stack>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default Cards;
