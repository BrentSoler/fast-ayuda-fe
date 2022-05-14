import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, InputLabel, Select, FormControl, MenuItem } from "@mui/material";
import { DatePicker, DesktopDatePicker, TimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { usePrograms } from "../../hooks/dataHooks/programs";

const ProgramForm = () => {
	const { data, isLoading, isError, isSuccess } = usePrograms();
	const [name, setName] = useState("");
	const [contact, setContact] = useState("");
	const [service, setService] = useState("");
	const [date, setDate] = useState(null);
	const [time, setTime] = useState(null);

	const transaction = {
		beneficiary: name,
		service: contact,
		date: date,
		location: "Post Test",
		time: time,
		status: "Post Test",
		ref_number: "Post Test",
	};

	const handleDropdown = (e) => {
		setService(e.target.value);
	};

	const handleSubmit = (e) => {};

	return (
		<form
			className="flex flex-col p-5 border-[.2px] gap-4 rounded-md justify-center"
			onSubmit={(e) => handleSubmit(e)}
		>
			{isLoading && <p>Loading... </p>}
			{isError && <p>ERROR</p>}
			{isSuccess && (
				<>
					<TextField label="Name" />
					<TextField label="Location" />
					<FormControl>
						<InputLabel id="service">Service</InputLabel>
						<Select labelId="service" label="Service" value={service} onChange={handleDropdown}>
							{data.data.data.map((item) => (
								<MenuItem value={item.name}>{item.name}</MenuItem>
							))}
						</Select>
					</FormControl>
					<div className="flex gap-3">
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<DatePicker
								label="Date"
								value={date}
								onChange={(newDate) => setDate(newDate)}
								renderInput={(e) => <TextField {...e} />}
								sx={{ display: { xs: "none", sm: "flex" } }}
							/>
							<TimePicker
								label="Time"
								value={time}
								onChange={(newTime) => setTime(newTime)}
								renderInput={(e) => <TextField {...e} />}
							/>
						</LocalizationProvider>
					</div>
					<div className="w-full flex justify-end mt-14">
						<Button sx={{ width: "10rem", alignSelf: "center" }} variant="contained">
							Send
						</Button>
					</div>
				</>
			)}
		</form>
	);
};

export default ProgramForm;
