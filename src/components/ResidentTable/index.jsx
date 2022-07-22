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
import { useGetAllUser } from "../../hooks/dataHooks/users";

const ResidentsTable = () => {
	const { data, isLoading, isError, isSuccess } = useGetAllUser();

	return (
		<div className="flex flex-col gap-3 py-3">
			{isLoading && <p>Loading... </p>}
			{isError && <p>ERROR</p>}
			{isSuccess && (
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>USER ID</TableCell>
								<TableCell align="right">NAME</TableCell>
								<TableCell align="right">EMAIL</TableCell>
								<TableCell align="right">MOBILE #</TableCell>
								<TableCell align="right">ADDRESS</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{data.data.map((prog) => (
								<TableRow
									key={prog.user_id}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<TableCell>{prog.user_id}</TableCell>
									<TableCell component="th" scope="row" align="right">
										{`${prog.last_name}, ${prog.first_name} ${prog.middle_name}`}
									</TableCell>
									<TableCell align="right">{prog.email}</TableCell>
									<TableCell align="right">{prog.mobile_number}</TableCell>
									<TableCell align="right">{`${prog.unit_number},${prog.lot_and_block_number} ${prog.street} ${prog.barangay}`}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</div>
	);
};

export default ResidentsTable;
