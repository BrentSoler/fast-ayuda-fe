import { Container } from "@mui/material";
import React from "react";
import { AppointmentForm } from "../../components";
import CustomeModal from "../../components/CustomeModal/CustomModal";

const TransactionForm = () => {
	const [modal, setModal] = React.useState(false);

	return (
		<Container>
			<CustomeModal
				state={modal}
				close={() => setModal(false)}
				textHeader="Successfull"
				textMain="Successfully booked wait for any news on your status"
				linkBack="/dashboard/transactions"
			/>
			<div className="flex flex-col md:flex-row justify-center md:h-[90vh] items-center gap-10 font-pop p-5">
				<div className="font-pop text-center md:text-left">
					<p className="text-4xl text-main font-bold mb-5">Book an Appointment</p>
					<p>We are ready to solve all your problems</p>
				</div>
				<AppointmentForm modal={(state) => setModal(state)} />
			</div>
		</Container>
	);
};

export default TransactionForm;
