import React from "react";
import {MuiTelInput} from "mui-tel-input";

const InputPhone = ({size}) => {
	const [value, setValue] = React.useState("");
	const handleChange = (newValue) => {
		setValue(newValue);
	};
	return <MuiTelInput defaultCountry='AR' value={value} onChange={handleChange} size={size} />;
};

export default InputPhone;
