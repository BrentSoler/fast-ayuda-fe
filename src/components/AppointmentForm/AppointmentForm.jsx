import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, InputLabel, Select, FormControl, MenuItem } from "@mui/material";
import { DatePicker, DesktopDatePicker, TimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const AppointmentForm = () => {
	const [service, setService] = useState("");
	const [date, setDate] = useState(null);
	const [time, setTime] = useState(null);

	const handleDropdown = (e) => {
		setService(e.target.value);
	};

	return (
		<form className="flex flex-col p-5 border-[.2px] gap-4 rounded-md">
			<TextField label="Name" />
			<TextField label="Contact Number" />
			<FormControl>
				<InputLabel id="service">Service</InputLabel>
				<Select labelId="service" label="Service" value={service} onChange={handleDropdown}>
					<MenuItem value="Test">Test</MenuItem>
					<MenuItem value="Test">Test</MenuItem>
					<MenuItem value="Test">Test</MenuItem>
					<MenuItem value="Test">Test</MenuItem>
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
		</form>
	);
};

export default AppointmentForm;
