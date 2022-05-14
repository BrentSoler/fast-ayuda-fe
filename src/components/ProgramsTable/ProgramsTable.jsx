import React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Button,
} from "@mui/material";
import { AiFillPlusCircle } from "react-icons/ai";

const rows = [
	{
		name: "SK ML Tournament",
		programId: "PROG-001",
		type: "Leisure",
		createdAt: "05-13-2022",
		status: "Active",
	},
	{
		name: "Oplan Linis",
		programId: "PROG-002",
		type: "Nature",
		createdAt: "05-13-2022",
		status: "Inactive",
	},
	{
		name: "Sako Motor Racing",
		programId: "PROG-003",
		type: "Leisure",
		createdAt: "05-13-2022",
		status: "Active",
	},
];

const ProgramsTable = () => {
	return (
		<div className="flex flex-col gap-3 py-3">
			<Button
				className="text-white self-end rounded-3xl relative group flex hover:w-[9rem] transition-all gap-3 font-pop"
				variant="contained"
			>
				<AiFillPlusCircle size={30} className="transition-all" />
				<div className="group-hover:static absolute -translate-x-[100%] group-hover:-translate-x-0 trasition-all w-max">
					program
				</div>
			</Button>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>NAME</TableCell>
							<TableCell align="right">PROGRAM ID</TableCell>
							<TableCell align="right">TYPE</TableCell>
							<TableCell align="right">CREATED AT</TableCell>
							<TableCell align="right">STATUS</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="right">{row.programId}</TableCell>
								<TableCell align="right">{row.type}</TableCell>
								<TableCell align="right">{row.createdAt}</TableCell>
								<TableCell align="right">{row.status}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default ProgramsTable;
