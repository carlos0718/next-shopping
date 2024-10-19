import React from "react";
import {MuiTelInput} from "mui-tel-input";

const InputPhone = React.forwardRef(({value, onChange, size, sx, ...props}, ref) => {
	const handleChange = (newValue) => {
		onChange(newValue);
	};

	return <MuiTelInput defaultCountry='AR' value={value} sx={sx} onChange={handleChange} size={size} inputRef={ref} {...props} />;
});

InputPhone.displayName = "InputPhone";

export default InputPhone;
