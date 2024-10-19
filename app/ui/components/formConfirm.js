"use client";
import React from "react";
import {Box, Card, Checkbox, FormControlLabel, TextField, Typography} from "@mui/material";
import InputPhone from "@/app/ui/components/inputPhone";
import Textarea from "@/app/ui/components/textarea";
import {Controller, useForm} from "react-hook-form";
import FormMercadoPagoPayment from "@/app/ui/components/formMercadoPago";

export default function FormConfirm() {
	const [checked, setChecked] = React.useState(false);

	const {
		register,
		handleSubmit,
		control,
		watch,
		formState: {errors},
	} = useForm({
		defaultValues: {
			name: "",
			Lastname: "",
			email: "",
			telephone: "",
			address: "",
		},
	});

	const sx = {
		"& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
			borderColor: "#979393",
		},
	};

	const onSubmit = (data) => console.log(data);

	const handleChange = (event) => {
		const allFieldsFilled = !!(watch("name") && watch("Lastname") && watch("email") && watch("telephone") && watch("address"));
		console.log(allFieldsFilled);
		if (allFieldsFilled) {
			setChecked(event.target.checked);
			if (event.target.checked) {
				handleSubmit(onSubmit)();
			}
		} else {
			alert("Por favor, complete todos los campos requeridos antes de aceptar los términos y condiciones.");
		}
	};

	return (
		<Card sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", mr: 4, py: 4}}>
			<Typography variant='h5' color='#527ba5' sx={{fontWeight: 600, ml: "0px"}} gutterBottom>
				Contact information
			</Typography>
			<form>
				<Box sx={{m: 2, "& .MuiTextField-root": {m: 1, width: "35ch"}}}>
					{/* register your input into the hook by invoking the "register" function */}
					<TextField label='Name *' id='lbl-name' size='small' sx={sx} {...register("name", {required: true})} />
					{/* include validation with required or other standard HTML validation rules */}
					<TextField label='Lastname *' id='lbl-lastname' size='small' sx={sx} {...register("Lastname", {required: true})} />
				</Box>
				<Box sx={{m: 2, "& .MuiTextField-root": {m: 1, width: "35ch"}}} className='flex'>
					<Box>
						<TextField type='email' label='E-mail *' id='lbl-email' size='small' sx={sx} {...register("email", {required: true})} />
					</Box>
					<Box>
						<Controller
							name='telephone'
							control={control}
							rules={{required: "Telephone is required"}}
							render={({field}) => <InputPhone {...field} size='small' sx={sx} />}
						/>
					</Box>
				</Box>
				<Box sx={{m: 2, "& .MuiTextField-root": {m: 1, width: "72ch"}}}>
					<TextField type='text' label='Address *' id='lbl-address' size='small' sx={sx} {...register("address", {required: true})} />
				</Box>
				<Box
					sx={{
						m: 2,
						"& .MuiTextField-root": {m: 1, width: "72ch"},
						"& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
							borderColor: "#979393",
						},
					}}
				>
					<Textarea />
				</Box>
				<Box sx={{m: 2, "& .MuiTextField-root": {m: 1, width: "72ch"}}}>
					<FormControlLabel
						required
						control={<Checkbox checked={checked} onChange={handleChange} name='cbxAccept' />}
						label='I confirm terms and conditions'
						sx={{
							ml: 0.5,
							"& .MuiTypography-root": {
								color: "#a59c9c",
							},
							"& .MuiFormControlLabel-asterisk": {
								color: "#a59c9c",
							},
						}}
					/>
				</Box>
				<Box sx={{m: 3, "& .MuiTextField-root": {m: 1}, width: "72ch", alignItems: "center", display: checked ? "block" : "none"}}>
					<FormMercadoPagoPayment />
				</Box>
			</form>
		</Card>
	);
}
