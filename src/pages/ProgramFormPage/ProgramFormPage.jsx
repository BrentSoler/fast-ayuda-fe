import React from "react";
import { Container } from "@mui/material";
import { ProgramForm } from "../../components";
import CustomeModal from "../../components/CustomeModal/CustomModal";

const ProgramFormPage = () => {
	const [modal, setModal] = React.useState(false);

	return (
		<Container>
			<CustomeModal
				state={modal}
				close={() => setModal(false)}
				textHeader="Successfull"
				textMain="Successfully made a new Program"
				linkBack="/dashboard/programs"
			/>
			<div className="flex flex-col md:flex-row justify-center items-center gap-10 font-pop p-5">
				<div className="font-pop text-center md:text-left">
					<p className="text-4xl text-main font-bold mb-5">Create a Program</p>
					<p>We are ready to solve all your problems</p>
				</div>
				<ProgramForm modal={(state) => setModal(state)} />
			</div>
		</Container>
	);
};

export default ProgramFormPage;
