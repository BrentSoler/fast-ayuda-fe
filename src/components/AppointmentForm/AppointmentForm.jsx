import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { Button, InputLabel, Select, FormControl, MenuItem } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { usePrograms } from "../../hooks/dataHooks/programs";
import { usePostTransaction } from "../../hooks/dataHooks/trasactions";
import { IoIosArrowBack } from "react-icons/io";
import api from "../../hooks/api";

const AppointmentForm = ({ modal }) => {
	const [name, setName] = useState("");
	const [service, setService] = useState("");
	const [sched, setSched] = useState(null);
	const { data, isLoading, isError, isSuccess } = usePrograms();
	const { mutate } = usePostTransaction();
	const [contact, setContact] = useState("");
	const [location, setLocation] = useState("");
	const [date, setDate] = useState(null);
	const [time, setTime] = useState(null);

	const handleDropdown = async (e) => {
		setService(e.target.value);
		try {
			const res = await api.get(`/searchsched`, {
				params: {
					name: e.target.value,
				},
			});
			setSched(res.data.data);
		} catch (err) {}
	};

	const handleSucces = () => {
		setName("");
		setContact("");
		setService("");
		setDate(null);
		setLocation(null);
		setTime(null);
		modal(true);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const transaction = {
			beneficiary: name,
			service: service,
			date: date,
			location: location,
			contact: contact,
			time: time,
			status: "Pending",
			ref_number: "",
		};

		mutate({ transaction: transaction, func: handleSucces() });
	};

	return (
		<form
			className="flex flex-col p-5 border-[.2px] gap-4 rounded-md justify-center"
			onSubmit={(e) => handleSubmit(e)}
			onClick={() => console.log(data)}
		>
			{isLoading && <p>Loading... </p>}
			{isError && <p>ERROR</p>}
			{isSuccess && (
				<>
					<TextField label="Name" onChange={(e) => setName(e.target.value)} value={name} />
					<FormControl>
						<InputLabel id="service">Service</InputLabel>
						<Select labelId="service" label="Service" value={service} onChange={handleDropdown}>
							<MenuItem></MenuItem>
							{data.map((item) => (
								<MenuItem value={item.name}>{item.name}</MenuItem>
							))}
						</Select>
					</FormControl>
					<FormControl>
						<InputLabel id="location">Location</InputLabel>
						<Select
							labelId="location"
							label="Location"
							value={location}
							onChange={(e) => setLocation(e.target.value)}
						>
							<MenuItem></MenuItem>
							{sched !== null ? (
								sched.map((item) => <MenuItem value={item.location}>{item.location}</MenuItem>)
							) : (
								<MenuItem></MenuItem>
							)}
						</Select>
					</FormControl>
					<div className="flex gap-3">
						<FormControl fullWidth>
							<InputLabel id="date">Date</InputLabel>
							<Select
								labelId="date"
								label="Date"
								value={date}
								onChange={(e) => setDate(e.target.value)}
							>
								<MenuItem></MenuItem>
								{sched !== null ? (
									sched.map((item) => (
										<MenuItem value={item.start_date.split(" ")[0]}>
											{item.start_date.split(" ")[0]}
										</MenuItem>
									))
								) : (
									<MenuItem></MenuItem>
								)}
							</Select>
						</FormControl>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<TimePicker
								label="Time"
								value={time}
								onChange={(newTime) => setTime(newTime)}
								renderInput={(e) => <TextField {...e} />}
							/>
						</LocalizationProvider>
					</div>
					<div className="w-full flex justify-end mt-14 gap-7">
						<Link to="/dashboard/transactions">
							<Button variant="text" startIcon={<IoIosArrowBack />}>
								Go back
							</Button>
						</Link>
						<Button sx={{ width: "10rem", alignSelf: "center" }} variant="contained" type="submit">
							Send
						</Button>
					</div>
				</>
			)}
		</form>
	);
};

export default AppointmentForm;
