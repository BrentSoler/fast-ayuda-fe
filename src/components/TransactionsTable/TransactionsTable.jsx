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
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	TextField,
} from "@mui/material";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTransactions } from "../../hooks/dataHooks/trasactions";

const TransactionsTable = () => {
	const { data, isSuccess, isLoading, isError } = useTransactions();
	const [filter, setFilter] = useState("");
	const [searchFilter, setSearchFilter] = useState("");

	const filteredData = useMemo(() => {
		const sorted = data?.data.data.filter((d) =>
			d.status.includes(filter === "None" ? "" : filter)
		);

		const namesort = sorted?.filter((d) =>
			d.beneficiary.toLowerCase().includes(searchFilter.toLowerCase())
		);
		const servesort = sorted?.filter((d) =>
			d.service.toLowerCase().includes(searchFilter.toLowerCase())
		);

		return searchFilter === "" ? sorted : [...new Set([...namesort, ...servesort])];
	}, [filter, data, searchFilter]);

	return (
		<div className="flex flex-col gap-3 py-3">
			<div className="flex justify-end gap-5 items-center">
				<TextField
					label="Search"
					onChange={(e) => setSearchFilter(e.target.value)}
					value={searchFilter}
				/>
				<FormControl sx={{ width: "10rem" }}>
					<InputLabel id="sort-id">Sort</InputLabel>
					<Select
						labelId="sort-id"
						label="Sort"
						onChange={(e) => setFilter(e.target.value)}
						value={filter}
					>
						<MenuItem></MenuItem>
						<MenuItem value="None">None</MenuItem>
						<MenuItem value="Pending">Pending</MenuItem>
						<MenuItem value="Approved">Approved</MenuItem>
						<MenuItem value="Denied">Denied</MenuItem>
						<MenuItem value="Completed">Completed</MenuItem>
					</Select>
				</FormControl>
				<Link to="/dashboard/appointment" className="w-max">
					<Button
						className="text-white rounded-3xl relative group flex hover:w-[12rem] transition-all gap-3 font-pop"
						variant="contained"
					>
						<AiFillPlusCircle size={30} className="transition-all" />
						<div className="pointer-events-none opacity-0 group-hover:opacity-100 group-hover:static absolute -translate-x-[100%] group-hover:-translate-x-0 trasition-all w-max">
							transaction
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
								<TableCell>TRANSACTION ID</TableCell>
								<TableCell align="right">BENEFICIARY</TableCell>
								<TableCell align="right">SERVICE</TableCell>
								<TableCell align="right">DATE</TableCell>
								<TableCell align="right">LOCATION</TableCell>
								<TableCell align="right">TIME</TableCell>
								<TableCell align="right">STATUS</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{filteredData.map((transac) => (
								<TableRow
									key={transac.transactionId}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<TableCell component="th" scope="row">
										{transac.transaction_id}
									</TableCell>
									<TableCell align="right">{transac.beneficiary}</TableCell>
									<TableCell align="right">{transac.service}</TableCell>
									<TableCell align="right">{transac.date}</TableCell>
									<TableCell align="right">{transac.location}</TableCell>
									<TableCell align="right">{transac.time}</TableCell>
									<TableCell align="right">{transac.status}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</div>
	);
};

export default TransactionsTable;
