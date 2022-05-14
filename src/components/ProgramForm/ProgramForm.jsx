import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Button, InputLabel, Select, FormControl, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { usePostProgram, usePostSched } from "../../hooks/dataHooks/programs";

const ProgramForm = () => {
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [type, setType] = useState("");
	const [details, setDetails] = useState("");
	const [reqsec, setReqsec] = useState("");
	const [progView, setProgView] = useState("");
	const [dateStart, setDateStart] = useState(null);
	const [dateEnd, setDateEnd] = useState(null);
	const { mutate } = usePostProgram();
	const { mutate: schedmutate } = usePostSched();

	const handleSubmit = (e) => {
		e.preventDefault();

		const sched = {
			name: name,
			location: location,
			start_date: dateStart,
			end_date: dateEnd,
		};

		const prog = {
			name: name,
			type: type,
			details: details,
			required_sector: reqsec,
			program_view: progView,
			program_status: "Upcoming",
		};

		mutate(prog);
		schedmutate(sched);

		setName("");
		setLocation("");
		setType("");
		setReqsec("");
		setProgView("");
		setDetails("");
		setDateStart(null);
		setDateEnd(null);
	};

	return (
		<form
			className="flex flex-col p-5 border-[.2px] gap-4 rounded-md justify-center"
			onSubmit={(e) => handleSubmit(e)}
		>
			<>
				<TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
				<TextField
					label="Location"
					value={location}
					onChange={(e) => setLocation(e.target.value)}
				/>
				<TextField label="Type" value={type} onChange={(e) => setType(e.target.value)} />
				<TextField label="Sector" value={reqsec} onChange={(e) => setReqsec(e.target.value)} />
				<TextField label="View" value={progView} onChange={(e) => setProgView(e.target.value)} />
				<TextField
					label="Details"
					multiline
					rows={5}
					value={details}
					onChange={(e) => setDetails(e.target.value)}
				/>
				<div className="flex gap-3">
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DatePicker
							label="Date Start"
							value={dateStart}
							onChange={(newDate) => setDateStart(newDate)}
							renderInput={(e) => <TextField {...e} />}
						/>
						<DatePicker
							label="Date End"
							value={dateEnd}
							onChange={(newDate) => setDateEnd(newDate)}
							renderInput={(e) => <TextField {...e} />}
						/>
					</LocalizationProvider>
				</div>
				<div className="w-full flex justify-end mt-14 gap-5">
					<Link to="/dashboard/programs">
						<Button variant="text" startIcon={<IoIosArrowBack />}>
							Go back
						</Button>
					</Link>
					<Button sx={{ width: "10rem", alignSelf: "center" }} variant="contained" type="submit">
						Send
					</Button>
				</div>
			</>
		</form>
	);
};

export default ProgramForm;
