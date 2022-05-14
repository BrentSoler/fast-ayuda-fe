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
import { Link } from "react-router-dom";
import { usePrograms } from "../../hooks/dataHooks/programs";

const ProgramsTable = () => {
	const { data, isSuccess, isLoading, isError } = usePrograms();

	return (
		<div className="flex flex-col gap-3 py-3">
			<Link to="/addprogram" className="w-max self-end">
				<Button
					className="text-white self-end rounded-3xl relative group flex hover:w-[9rem] transition-all gap-3 font-pop"
					variant="contained"
					onClick={() => console.log(data.data.data)}
				>
					<AiFillPlusCircle size={30} className="transition-all" />
					<div className="group-hover:static absolute -translate-x-[100%] group-hover:-translate-x-0 trasition-all w-max">
						program
					</div>
				</Button>
			</Link>
			{isLoading && <p>Loading... </p>}
			{isError && <p>ERROR</p>}
			{isSuccess && (
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
							{data.data.data.map((prog) => (
								<TableRow
									key={prog.name}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<TableCell component="th" scope="row">
										{prog.name}
									</TableCell>
									<TableCell align="right">{prog.program_id}</TableCell>
									<TableCell align="right">{prog.type}</TableCell>
									<TableCell align="right">{prog.program_created}</TableCell>
									<TableCell align="right">{prog.program_updated}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</div>
	);
};

export default ProgramsTable;
