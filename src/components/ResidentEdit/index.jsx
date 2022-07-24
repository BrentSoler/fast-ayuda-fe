import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useUserStore } from "../../store/userStore";
import { useGetUser, useUpdateUser } from "../../hooks/dataHooks/users";
import { useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ResidentEdit = () => {
	const user = useUserStore((state) => state.user);
	const params = useParams();
	const { data, isSuccess, refetch } = useGetUser(params.id ? params.id : user.user_id);
	const { mutate } = useUpdateUser();
	const [isFailed, setIsFailed] = useState(false);
	const [birthday, setBirthday] = useState();
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		middle_name: "",
		email: "",
		password: "",
		mobile_number: "",
		contact_person: "",
		contact_person_number: "",
		suffix: "",
		street: "",
		gender: "",
		barangay: "",
		unit_number: "",
		lot_and_block_number: "",
	});

	const {
		email,
		first_name,
		last_name,
		middle_name,
		mobile_number,
		suffix,
		contact_person_number,
		contact_person,
		password,
		gender,
		barangay,
		unit_number,
		lot_and_block_number,
		street,
	} = formData;

	useEffect(() => {
		console.log(params);
		if (isSuccess) {
			setFormData({
				first_name: data.first_name,
				last_name: data.last_name,
				middle_name: data.middle_name,
				email: data.email,
				mobile_number: data.mobile_number,
				suffix: data.suffix,
				password: user.password,
				contact_person_number: data.contact_person_number,
				contact_person: data.contact_person,
				gender: data.gender,
				barangay: data.barangay,
				street: data.street,
				unit_number: data.unit_number,
				lot_and_block_number: data.lot_and_block_number,
			});
			setBirthday(data.birthday);
		}
	}, [isSuccess, data]);

	useEffect(() => {
		if (isFailed) {
			setTimeout(() => {
				setIsFailed(false);
			}, 3000);
		}
	}, [isFailed]);

	useEffect(() => {
		refetch();
	}, []);

	const onChange = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	const submitHandler = (e) => {
		e.preventDefault();

		if (
			first_name === "" ||
			middle_name === "" ||
			last_name === "" ||
			email === "" ||
			mobile_number === "" ||
			gender === "" ||
			password === "" ||
			barangay === "" ||
			unit_number === "" ||
			lot_and_block_number === "" ||
			street === "" ||
			suffix === "" ||
			contact_person_number === "" ||
			contact_person === "" ||
			!birthday
		) {
			toast.error("Missing Feilds");
			return;
		}

		const userData = {
			user_id: params ? params.id : user.user_id,
			first_name: first_name,
			middle_name: middle_name,
			last_name: last_name,
			email: email,
			suffix: suffix,
			password: password,
			mobile_number: mobile_number,
			contact_person_number: contact_person_number,
			contact_person: contact_person,
			gender: gender,
			barangay: barangay,
			street: street,
			unit_number: unit_number,
			lot_and_block_number: lot_and_block_number,
			birthday: birthday,
		};

		mutate({ data: { userData } });
	};

	return (
		<form
			className="flex flex-col p-5 border-[0.2px] border-gray-500 rounded-md gap-5 w-[90%] md:w-[30rem] md:min-h-[30rem] font-pop"
			onSubmit={submitHandler}
		>
			<TextField
				label="First Name"
				sx={{ width: "80%" }}
				name="first_name"
				value={first_name}
				onChange={onChange}
			/>
			<TextField
				label="Middle Name"
				sx={{ width: "80%" }}
				name="middle_name"
				value={middle_name}
				onChange={onChange}
			/>
			<TextField
				label="Last Name"
				sx={{ width: "80%" }}
				name="last_name"
				value={last_name}
				onChange={onChange}
			/>
			<TextField
				label="Suffix"
				sx={{ width: "80%" }}
				name="suffix"
				value={suffix}
				onChange={onChange}
			/>
			<TextField
				label="Email"
				sx={{ width: "80%" }}
				name="email"
				value={email}
				onChange={onChange}
			/>
			{!params.id && (
				<TextField
					label="Password"
					sx={{ width: "80%" }}
					name="password"
					value={password}
					onChange={onChange}
				/>
			)}
			<TextField
				label="Mobile Number"
				sx={{ width: "80%" }}
				name="mobile_number"
				value={mobile_number}
				onChange={onChange}
			/>
			<TextField
				label="Contact Person"
				sx={{ width: "80%" }}
				name="contact_person"
				value={contact_person}
				onChange={onChange}
			/>
			<TextField
				label="Contact Person Number"
				sx={{ width: "80%" }}
				name="contact_person_number"
				value={contact_person_number}
				onChange={onChange}
			/>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<DatePicker
					label="Birthday"
					value={birthday}
					onChange={(newDate) => setBirthday(newDate)}
					renderInput={(e) => <TextField {...e} />}
				/>
			</LocalizationProvider>
			<TextField
				label="Gender"
				sx={{ width: "80%" }}
				name="gender"
				value={gender}
				onChange={onChange}
			/>
			<TextField
				label="Barangay"
				sx={{ width: "80%" }}
				name="barangay"
				value={barangay}
				onChange={onChange}
			/>
			<TextField
				label="Street"
				sx={{ width: "80%" }}
				name="street"
				value={street}
				onChange={onChange}
			/>
			<TextField
				label="Unit #"
				sx={{ width: "80%" }}
				name="unit_number"
				value={unit_number}
				onChange={onChange}
			/>
			<TextField
				label="Lot & Block #"
				sx={{ width: "80%" }}
				name="lot_and_block_number"
				value={lot_and_block_number}
				onChange={onChange}
			/>
			<Button sx={{ width: "10rem", alignSelf: "end" }} variant="contained" type="submit">
				Send
			</Button>
		</form>
	);
};

export default ResidentEdit;
