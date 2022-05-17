import React, { useState, useMemo } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Button,
	TextField,
} from "@mui/material";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { usePrograms } from "../../hooks/dataHooks/programs";

const ProgramsTable = () => {
	const { data, isSuccess, isLoading, isError } = usePrograms();
	const [filter, setFilter] = useState("");
	const [searchFilter, setSearchFilter] = useState("");

	const filteredData = useMemo(() => {
		const sorted = data?.data.data;

		const namesort = sorted?.filter((d) =>
			d.name.toLowerCase().includes(searchFilter.toLowerCase())
		);
		const servesort = sorted?.filter((d) =>
			d.type.toLowerCase().includes(searchFilter.toLowerCase())
		);

		return searchFilter === "" ? sorted : [...new Set([...namesort, ...servesort])];
	}, [filter, data, searchFilter]);

	return (
		<div className="flex flex-col gap-3 py-3">
			<div className="flex justify-end gap-5 items-center">
				<TextField
					label="Search"
					onChange={(e) => {
						setSearchFilter(e.target.value);
						console.log(filteredData, searchFilter);
					}}
					value={searchFilter}
				/>
				<Link to="/addprogram" className="w-max">
					<Button
						className="text-white self-end rounded-3xl relative group flex hover:w-[9rem] transition-all gap-3 font-pop"
						variant="contained"
						onClick={() => console.log(data.data.data)}
					>
						<AiFillPlusCircle size={30} className="transition-all" />
						<div className="pointer-events-none opacity-0 group-hover:opacity-100 group-hover:static absolute -translate-x-[100%] group-hover:-translate-x-0 trasition-all w-max">
							program
						</div>
					</Button>
				</Link>
			</div>
			{isLoading && <p>Loading... </p>}
			{isError && <p>ERROR</p>}
			{isSuccess && (
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>PROGRAM ID</TableCell>
								<TableCell align="right">NAME</TableCell>
								<TableCell align="right">TYPE</TableCell>
								<TableCell align="right">SECTOR</TableCell>
								<TableCell align="right">CREATED AT</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{filteredData.map((prog) => (
								<TableRow key={prog.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
									<TableCell>{prog.program_id}</TableCell>
									<TableCell component="th" scope="row" align="right">
										{prog.name}
									</TableCell>
									<TableCell align="right">{prog.type}</TableCell>
									<TableCell align="right">{prog.required_sector}</TableCell>
									<TableCell align="right">{prog.program_created}</TableCell>
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
