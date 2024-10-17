import * as React from "react";
import {TextField} from "@mui/material";

export default function Textarea() {
	return <TextField multiline rows={4} defaultValue='' label='Description' />;
}
