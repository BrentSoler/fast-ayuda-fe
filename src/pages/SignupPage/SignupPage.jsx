import React from "react";
import SignupForm from "../../components/SingupForm/SingupForm";
import CustomeModal from "../../components/CustomeModal/CustomModal";

const SignUpPage = () => {
	const [modal, setModal] = React.useState(false);

	return (
		<div className="font-pop mt-5 flex flex-col items-center">
			<CustomeModal
				close={() => setModal(false)}
				linkBack="/login"
				state={modal}
				textHeader="Sucess"
				textMain="You have Sucessfully Made an account go back and login to FAST-Ayuda!"
			/>
			<p className="text-4xl text-main font-bold mb-5 text-center">Create An Account</p>
			<p className="text-center mb-7">Get started on FAST-Ayuda</p>
			<SignupForm modal={(state) => setModal(state)} />
		</div>
	);
};

export default SignUpPage;
