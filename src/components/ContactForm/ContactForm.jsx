import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const ContactForm = () => {
	return (
		<form className="flex flex-col p-5 border-[0.2px] border-gray-500 rounded-md gap-5 w-[90%] md:w-[30rem] md:h-[30rem] font-pop">
			<TextField label="Name" sx={{ width: "80%" }} />
			<TextField label="Contact Number" sx={{ width: "80%" }} />
			<TextField label="Message" multiline rows={8} />
			<Button sx={{ width: "10rem", alignSelf: "center" }} variant="contained">
				Send
			</Button>
		</form>
	);
};

export default ContactForm;
