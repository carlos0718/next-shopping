"use client";
import {Box, TextField} from "@mui/material";
import React from "react";
import {useForm} from "react-hook-form";
import InputPhone from "./inputPhone";
import Textarea from "./textarea";
import FormMercadoPagoPayment from "./formMercadoPago";

export default function FormConfirm() {
	const {
		register,
		handleSubmit,
		watch,
		formState: {errors},
	} = useForm();
	const onSubmit = (data) => console.log(data);

	console.log(watch("example")); // watch input value by passing the name of it

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Box sx={{m: 2, "& .MuiTextField-root": {m: 1, width: "35ch"}}}>
					{/* register your input into the hook by invoking the "register" function */}
					<TextField label='Name' id='lbl-name' defaultValue='' size='small' {...register("name")} />
					{/* include validation with required or other standard HTML validation rules */}
					<TextField label='Lastname' id='lbl-lastname' defaultValue='' size='small' {...register("exampleRequired", {required: true})} />
					{/* errors will return when field validation fails  */}
					{errors.exampleRequired && <span>This field is required</span>}
				</Box>
				<Box sx={{m: 2, "& .MuiTextField-root": {m: 1, width: "35ch"}}}>
					<TextField type='email' label='E-mail' id='lbl-email' defaultValue='' size='small' {...register("email")} />
					{/* include validation with required or other standard HTML validation rules */}
					{errors.telephoneRequired && <span>This field is required</span>}
					<InputPhone {...register("telephoneRequired", {required: true})} size='small' />
				</Box>
				<Box sx={{m: 2, "& .MuiTextField-root": {m: 1, width: "72ch"}}}>
					<TextField type='text' label='Address' id='lbl-address' defaultValue='' size='small' {...register("address")} />
					{/* include validation with required or other standard HTML validation rules */}
					{errors.telephoneRequired && <span>This field is required</span>}
				</Box>
				<Box sx={{m: 2, "& .MuiTextField-root": {m: 1, width: "72ch"}}}>
					<Textarea />
				</Box>
				<Box sx={{m: 3, "& .MuiTextField-root": {m: 1}, width: "72ch", aligne: "center"}}>
					<FormMercadoPagoPayment />
				</Box>
			</form>
		</>
	);
}
