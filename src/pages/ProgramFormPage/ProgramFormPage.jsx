import React from "react";
import { Container } from "@mui/material";
import { ProgramForm } from "../../components";

const ProgramFormPage = () => {
	return (
		<Container>
			<div className="flex flex-col md:flex-row justify-center md:h-[90vh] items-center gap-10 font-pop p-5">
				<div className="font-pop text-center md:text-left">
					<p className="text-4xl text-main font-bold mb-5">Create a Program</p>
					<p>We are ready to solve all your problems</p>
				</div>
				<ProgramForm />
			</div>
		</Container>
	);
};

export default ProgramFormPage;
