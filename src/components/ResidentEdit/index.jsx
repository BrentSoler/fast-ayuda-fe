import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useUserStore } from "../../store/userStore";
import { useGetUser } from "../../hooks/dataHooks/users";
import { useState } from "react";
import { useEffect } from "react";

const ResidentEdit = () => {
	const user = useUserStore((state) => state.user);
	const { data, isSuccess } = useGetUser(user.user_id);
	const [isFailed, setIsFailed] = useState(false);
	const [birthday, setBirthday] = useState();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		mobile_number: "",
		street: "",
		gender: "",
		barangay: "",
		unit_number: "",
		lot_and_block_number: "",
	});

	const {
		name,
		email,
		mobile_number,
		gender,
		barangay,
		unit_number,
		lot_and_block_number,
		street,
	} = formData;

	useEffect(() => {
		if (isSuccess) {
			setFormData({
				name: data.first_name,
				email: data.email,
				mobile_number: data.mobile_number,
				gender: data.gender,
				barangay: data.barangay,
				street: data.street,
				unit_number: data.unit_number,
				lot_and_block_number: data.lot_and_block_number,
			});
			setBirthday(data.birthday);
		}
	}, [isSuccess]);

	useEffect(() => {
		if (isFailed) {
			setTimeout(() => {
				setIsFailed(false);
			}, 3000);
		}
	}, [isFailed]);

	const onChange = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	const submitHandler = (e) => {
		e.preventDefault();

		if (
			!name ||
			!email ||
			!mobile_number ||
			!gender ||
			!barangay ||
			!unit_number ||
			!lot_and_block_number ||
			!street
		) {
			setIsFailed(true);
			return;
		}
	};

	return (
		<form
			className="flex flex-col p-5 border-[0.2px] border-gray-500 rounded-md gap-5 w-[90%] md:w-[30rem] md:min-h-[30rem] font-pop"
			onSubmit={submitHandler}
		>
			<TextField label="Name" sx={{ width: "80%" }} name="name" value={name} onChange={onChange} />
			<TextField
				label="Email"
				sx={{ width: "80%" }}
				name="email"
				value={email}
				onChange={onChange}
			/>
			<TextField
				label="Mobile Number"
				sx={{ width: "80%" }}
				name="mobile_number"
				value={mobile_number}
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
			{isFailed && <h1>Missing Feilds</h1>}
			<Button sx={{ width: "10rem", alignSelf: "end" }} variant="contained">
				Send
			</Button>
		</form>
	);
};

export default ResidentEdit;
