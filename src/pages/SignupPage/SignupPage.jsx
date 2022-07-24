import React from "react";
import SignupForm from "../../components/SingupForm/SingupForm";
import CustomeModal from "../../components/CustomeModal/CustomModal";

const SignUpPage = () => {
	const [modal, setModal] = React.useState(false);

	return (
		<div className="font-pop mt-5 flex flex-col items-center">
			<p className="text-4xl text-main font-bold mb-5 text-center">Create An Account</p>
			<p className="text-center mb-7">Get started on E-SKEDYUL</p>
			<SignupForm modal={(state) => setModal(state)} />
		</div>
	);
};

export default SignUpPage;
