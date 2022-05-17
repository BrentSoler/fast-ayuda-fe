import { Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
	return (
		<form className="flex flex-col p-5 border-[.2px] gap-4 rounded-md justify-center w-[20rem]">
			<TextField label="Mobile No." />
			<TextField label="Password" type="password" />
			<div className="flex flex-col mt-5 gap-2 items-center">
				<Button variant="contained">Login</Button>
				<Link to="/signup" className="w-max">
					<Button sx={{ fontSize: 10, width: "max" }}>No Account? Sign up here!</Button>
				</Link>
			</div>
		</form>
	);
};

export default LoginForm;
