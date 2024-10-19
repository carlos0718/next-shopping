import {Card, CardActionArea, CardActions, CardContent, Grid, Skeleton} from "@mui/material";
import React from "react";

const Loading = () => {
	return (
		<>
			<Grid item xs={2} sm={4} md={4}>
				<Card sx={{maxWidth: 345}}>
					<CardActionArea>
						<Skeleton variant='rectangular' width={345} height={340} />
						<CardContent>
							<Skeleton variant='text' />
							<Skeleton variant='text' height={140} />
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Skeleton variant='rectangular' width={100} height={36} />
					</CardActions>
				</Card>
			</Grid>
		</>
	);
};

export default Loading;
