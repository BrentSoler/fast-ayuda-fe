import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Button, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { usePostUser } from "../../hooks/dataHooks/users";

const steps = ["Personal Information", "Emergency Contacts", "Address"];

const SignupForm = ({ modal }) => {
	const { mutate } = usePostUser();
	const [active, setActive] = React.useState(0);
	const [validPass, setValidPass] = React.useState(true);

	const [first_name, setfirst_name] = React.useState("");
	const [middle_name, setmiddle_name] = React.useState("");
	const [last_name, setlast_name] = React.useState("");
	const [birthday, setbirthday] = React.useState(null);
	const [suffix, setsuffix] = React.useState("");
	const [gender, setgender] = React.useState("");
	const [password, setpassword] = React.useState("");
	const [confirmPassword, setconfirmPassword] = React.useState("");
	const [email, setemail] = React.useState("");
	const [mobile_number, setmobile_number] = React.useState("");
	const [contact_person, setcontact_person] = React.useState("");
	const [contact_person_number, setcontact_person_number] = React.useState("");
	const [barangay, setbarangay] = React.useState("");
	const [unit_number, setunit_number] = React.useState("");
	const [lot_and_block_number, setlot_and_block_number] = React.useState("");
	const [street, setstreet] = React.useState("");
	const [sector, setsector] = React.useState("");

	const handleSucces = () => {
		setActive(0);
		setfirst_name("");
		setmiddle_name("");
		setlast_name("");
		setbirthday(null);
		setsuffix("");
		setgender("");
		setpassword("");
		setemail("");
		setmobile_number("");
		setcontact_person("");
		setbarangay("");
		setunit_number("");
		setstreet("");
		setsector("");
		modal(true);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const userData = {
			first_name: first_name,
			middle_name: middle_name,
			last_name: last_name,
			birthday: birthday,
			suffix: suffix,
			gender: gender,
			email: email,
			mobile_number: mobile_number,
			contact_person: contact_person,
			contact_person_number: contact_person_number,
			password: password,
			barangay: barangay,
			unit_number: unit_number,
			lot_and_block_number: lot_and_block_number,
			street: street,
			phase: "",
			sector: sector,
			user_status: 1,
			user_type: 0,
			valid_id: "",
		};

		console.log(steps.length, active);

		mutate({ user: userData, func: handleSucces });
	};

	const validator = () => {
		switch (active) {
			case 0:
				return first_name != "" &&
					middle_name != "" &&
					gender != "" &&
					suffix != "" &&
					birthday &&
					email != "" &&
					mobile_number != "" &&
					password != ""
					? false
					: true;
			case 1:
				return contact_person != "" && contact_person_number != "" ? false : true;
			case 2:
				return street != "" &&
					barangay != "" &&
					sector != "" &&
					unit_number != "" &&
					lot_and_block_number != ""
					? false
					: true;
		}
	};

	return (
		<form
			className="flex flex-col p-5 border-[.2px] gap-4 rounded-md justify-center w-[80%]"
			onSubmit={(e) => handleSubmit(e)}
		>
			<Stepper activeStep={active}>
				{steps.map((step) => (
					<Step key={step}>
						<StepLabel>{step}</StepLabel>
					</Step>
				))}
			</Stepper>
			{active !== steps.length && <p className="self-center text-3xl mt-6">{steps[active]}</p>}
			{active === 0 && (
				<>
					<div className="flex flex-col md:flex-row items-center justify-between gap-4">
						<TextField
							label="First name"
							sx={{ width: "100%" }}
							value={first_name}
							onChange={(e) => setfirst_name(e.target.value)}
							required
						/>
						<TextField
							label="Middle name"
							sx={{ width: "100%" }}
							value={middle_name}
							onChange={(e) => setmiddle_name(e.target.value)}
						/>
						<TextField
							label="Last name"
							sx={{ width: "100%" }}
							value={last_name}
							onChange={(e) => setlast_name(e.target.value)}
						/>
					</div>
					<div className="flex flex-col md:flex-row items-center justify-between gap-4">
						<LocalizationProvider dateAdapter={AdapterDateFns} sx={{ width: "100%" }}>
							<TextField
								label="Gender"
								sx={{ width: "60%" }}
								value={gender}
								onChange={(e) => setgender(e.target.value)}
							/>
							<TextField
								label="Suffix"
								sx={{ width: "30%" }}
								value={suffix}
								onChange={(e) => setsuffix(e.target.value)}
							/>
							<DatePicker
								label="Birthday"
								value={birthday}
								onChange={(newbday) => setbirthday(newbday)}
								renderInput={(e) => <TextField {...e} />}
								sx={{ width: "100%" }}
							/>
						</LocalizationProvider>
					</div>
					<div className="flex flex-col md:flex-row items-center justify-between gap-4">
						<TextField
							label="E-mail"
							sx={{ width: "100%" }}
							value={email}
							onChange={(e) => setemail(e.target.value)}
						/>
						<TextField
							label="Mobile No."
							sx={{ width: "100%" }}
							value={mobile_number}
							onChange={(e) => setmobile_number(e.target.value)}
						/>
					</div>
					<div className="flex flex-col items-center justify-between gap-4">
						<TextField
							label="Password"
							type="password"
							sx={{ width: "100%" }}
							value={password}
							onChange={(e) => {
								setpassword(e.target.value);
								setValidPass(password === confirmPassword ? true : false);
							}}
						/>
						<TextField
							label="Confirm Password"
							type="password"
							sx={{ width: "100%" }}
							value={confirmPassword}
							onChange={(e) => {
								setconfirmPassword(e.target.value);
								setValidPass(password === confirmPassword ? true : false);
							}}
						/>
					</div>
					{validPass && password != "" && (
						<h1 className="text-red-400 text-center">Passwords Don't Match</h1>
					)}
				</>
			)}
			{active === 1 && (
				<>
					<div className=" flex flex-col gap-5">
						<TextField
							label="Emegency Contact Name"
							sx={{ width: "100%" }}
							value={contact_person}
							onChange={(e) => setcontact_person(e.target.value)}
						/>
						<TextField
							label="Emegency Contact Mobile No."
							sx={{ width: "100%" }}
							value={contact_person_number}
							onChange={(e) => setcontact_person_number(e.target.value)}
						/>
					</div>
				</>
			)}
			{active === 2 && (
				<>
					<div className=" flex flex-col gap-5">
						<TextField
							label="Street"
							sx={{ width: "100%" }}
							value={street}
							onChange={(e) => setstreet(e.target.value)}
						/>
						<TextField
							label="Barangay"
							sx={{ width: "100%" }}
							value={barangay}
							onChange={(e) => setbarangay(e.target.value)}
						/>
					</div>
					<div className="flex flex-col md:flex-row items-center justify-between gap-4">
						<TextField
							label="Sector"
							sx={{ width: "100%" }}
							value={sector}
							onChange={(e) => setsector(e.target.value)}
						/>
						<TextField
							label="Unit No."
							sx={{ width: "100%" }}
							value={unit_number}
							onChange={(e) => setunit_number(e.target.value)}
						/>
						<TextField
							label="Lot & Block No."
							sx={{ width: "100%" }}
							value={lot_and_block_number}
							onChange={(e) => setlot_and_block_number(e.target.value)}
						/>
					</div>
				</>
			)}
			{active === steps.length && (
				<>
					<p className="self-center text-3xl mt-6">Done!</p>
				</>
			)}
			<div className="flex justify-between">
				<Button
					disabled={active === 0}
					startIcon={<AiOutlineArrowLeft />}
					onClick={() => setActive((prev) => prev - 1)}
				>
					Go Back
				</Button>
				{active !== steps.length ? (
					<Button
						endIcon={<AiOutlineArrowRight />}
						disabled={active === steps.length || validator()}
						onClick={() => (!validPass ? setActive((prev) => prev + 1) : setActive((prev) => prev))}
					>
						Next
					</Button>
				) : (
					<Button variant="contained" disabled={active !== steps.length} type="submit">
						Finish
					</Button>
				)}
			</div>
		</form>
	);
};

export default SignupForm;
