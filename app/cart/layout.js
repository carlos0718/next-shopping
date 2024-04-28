import React from "react";
import {Box, Container, Stack} from "@mui/material";

const CartLayout = ({children}) => {
	return (
		<Container>
			<Box sx={{width: "100%"}}>
				<Stack spacing={2}>{children}</Stack>
			</Box>
		</Container>
	);
};

export default CartLayout;
