"use client";
import {styled} from "@mui/material";
import Button from "@mui/material/Button";

const ButtonCustom = styled(Button)(({theme}) => ({
	color: theme.palette.getContrastText("#1976d2"),
	backgroundColor: "#1976d2",
	"&:hover": {
		backgroundColor: "#1976d5",
	},
	"&.MuiButton-root": {
		backgroundColor: "#1976d2",
	},
}));

export default ButtonCustom;
