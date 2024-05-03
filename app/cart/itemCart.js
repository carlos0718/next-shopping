"use client";
import * as React from "react";
import Link from "next/link";
import {styled} from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import {Button, Chip} from "@mui/material";
import stateStorage from "../store/stateStorage";

const Img = styled("img")({
	margin: "auto",
	display: "block",
	maxWidth: "100%",
	maxHeight: "100%",
});

export default function ItemCart({image, title, price, category, quantity, id, onRemove}) {
	return (
		<Paper
			sx={{
				p: 2,
				margin: "auto",
				flexGrow: 1,
				backgroundColor: (theme) => (theme.palette.mode === "dark" ? "#1A2027" : "#fff"),
			}}
		>
			<Grid container spacing={2}>
				<Grid item>
					<ButtonBase sx={{width: 128, height: 128}}>
						<Img alt='complex' src={image} />
					</ButtonBase>
				</Grid>
				<Grid item xs={12} sm container>
					<Grid item xs container direction='column' spacing={2}>
						<Grid item xs>
							<Typography gutterBottom variant='subtitle1' component='div' sx={{fontWeight: "bold"}}>
								{title}
							</Typography>
							<Chip label={category} color='primary' />
						</Grid>
						<Grid item>
							<Typography variant='body2' color='text.secondary' sx={{marginLeft: "5px", fontWeight: 700}}>
								Quatities: {quantity}
							</Typography>
						</Grid>
						<Grid item>
							<Grid container spacing={1}>
								<Grid item xs={3}>
									<Link href={`../product/${id}`}>
										<Button>
											<Typography
												sx={{
													cursor: "pointer",
													"&:hover": {backgroundColor: "#1976d2", color: "#fff"},
													maxWidth: "5rem",
													textAlign: "center",
													borderRadius: "5px",
													padding: "5px",
												}}
												variant='body2'
											>
												Detail
											</Typography>
										</Button>
									</Link>
								</Grid>
								<Grid item xs={3}>
									<Button onClick={() => onRemove(id)}>
										<Typography
											sx={{
												maxWidth: "5rem",
												cursor: "pointer",
												"&:hover": {backgroundColor: "#f65050", color: "#fff"},
												textAlign: "center",
												borderRadius: "5px",
												padding: "5px",
											}}
											variant='body2'
										>
											Remove
										</Typography>
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						Unit Price
						<Typography variant='h6' component='div'>
							${price * 1000}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
}
