import React from "react";
import TextField from "@mui/material/TextField";
import { withStyles } from "@mui/material/styles";

const styles = {
	someTextField: {
		minHeight: 420,
	},
};

const ProgramForm = () => {
	return (
		<div className="flex flex-col p-5 border-[0.2px] border-gray-500 rounded-md gap-8 w-[90%] md:w-[30rem] md:h-[30rem]">
			<TextField label="Name" sx={{ width: "80%" }} />
			<TextField label="Type" sx={{ width: "80%" }} />
			<TextField label="Details" InputProps={{}} />
		</div>
	);
};

export default ProgramForm;