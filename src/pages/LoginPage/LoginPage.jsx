import { Container } from "@mui/material";
import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
	return (
		<Container maxWidth="md">
			<div className="flex flex-col md:flex-row justify-between md:h-[90vh] items-center gap-10 font-pop p-5">
				<div className="font-pop text-center md:text-left">
					<p className="text-4xl text-main font-bold mb-5">Login</p>
					<p>Login to Fast-Ayuda</p>
				</div>
				<LoginForm />
			</div>
		</Container>
	);
};

export default LoginPage;
