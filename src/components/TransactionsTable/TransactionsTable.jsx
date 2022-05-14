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
import { useTransactions } from "../../hooks/dataHooks/trasactions";

const TransactionsTable = () => {
	const { data, isSuccess, isLoading, isError } = useTransactions();

	return (
		<div className="flex flex-col gap-3 py-3">
			<Link to="/appointment" className="w-max self-end">
				<Button
					className="text-white rounded-3xl relative group flex hover:w-[12rem] transition-all gap-3 font-pop"
					variant="contained"
				>
					<AiFillPlusCircle size={30} className="transition-all" />
					<div className="group-hover:static absolute -translate-x-[100%] group-hover:-translate-x-0 trasition-all w-max">
						transaction
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
							{data.data.data.map((transac) => (
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
