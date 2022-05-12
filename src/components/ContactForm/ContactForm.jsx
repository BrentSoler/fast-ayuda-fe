import React from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

const ContactForm = () => {
	return (
		<div className="flex flex-col p-5 border-[0.2px] border-gray-500 rounded-md gap-5 ">
			<TextField label="Name" />
			<TextField label="Contact Number" />
			<TextField label="Message" maxRows={5} />
		</div>
	);
};

export default ContactForm;
