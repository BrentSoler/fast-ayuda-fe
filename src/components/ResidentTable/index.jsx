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
import { useMemo, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const ResidentsTable = () => {
	const { data, isLoading, isError, isSuccess } = useGetAllUser();
	const [searchFilter, setSearchFilter] = useState("");

	const filteredData = useMemo(() => {
		const sorted = data?.data;

		const fnamesort = sorted?.filter((d) =>
			d.first_name.toLowerCase().includes(searchFilter.toLowerCase())
		);
		const mnamesort = sorted?.filter((d) =>
			d.middle_name.toLowerCase().includes(searchFilter.toLowerCase())
		);
		const lnamesort = sorted?.filter((d) =>
			d.last_name.toLowerCase().includes(searchFilter.toLowerCase())
		);

		return searchFilter === "" ? sorted : [...new Set([...fnamesort, ...mnamesort, ...lnamesort])];
	}, [searchFilter, data]);

	return (
		<div className="flex flex-col gap-3 py-3">
			<div className="flex justify-end gap-5 items-center">
				<TextField
					label="Search"
					onChange={(e) => {
						setSearchFilter(e.target.value);
					}}
					value={searchFilter}
				/>
				<Link to="/dashboard/signup" className="w-max">
					<Button
						className="text-white self-end rounded-3xl relative group flex hover:w-[9rem] transition-all gap-3 font-pop"
						variant="contained"
						onClick={() => console.log(data.data.data)}
					>
						<AiFillPlusCircle size={30} className="transition-all" />
						<div className="pointer-events-none opacity-0 group-hover:opacity-100 group-hover:static absolute -translate-x-[100%] group-hover:-translate-x-0 trasition-all w-max">
							Resident
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
								<TableCell>USER ID</TableCell>
								<TableCell align="right">NAME</TableCell>
								<TableCell align="right">EMAIL</TableCell>
								<TableCell align="right">MOBILE #</TableCell>
								<TableCell align="right">ADDRESS</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{filteredData.map((prog) => (
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
									<TableCell align="right">
										<Link to={`/dashboard/profile/edit/${prog.user_id}`} className="w-full">
											<Button>Edit</Button>
										</Link>
									</TableCell>
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
