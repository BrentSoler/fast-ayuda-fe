import React from "react";
import { Link } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
} from '@mui/material'

const rows = [
    {
        name: 'SK ML Tournament',
        programId: 'PROG-001',
        type: 'Leisure',
        createdAt: '05-13-2022',
        status: 'Active'
    },
    {
        name: 'Oplan Linis',
        programId: 'PROG-002',
        type: 'Nature',
        createdAt: '05-13-2022',
        status: 'Inactive'
    },
    {
        name: 'Sako Motor Racing',
        programId: 'PROG-003',
        type: 'Leisure',
        createdAt: '05-13-2022',
        status: 'Active'
    },
];

const ProgramsTable = () => {
    return (
        <div>
            <Link to="/about-us">
                <Button variant="contained">ADD PROGRAM</Button>
			</Link>
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
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
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
    )
}

export default ProgramsTable; 
