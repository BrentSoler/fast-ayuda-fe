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
} from '@mui/material'

const rows = [
    {
        transactionId: 'TRANSAC-001',
        beneficiary: 'Brgy Tibay',
        service: 'Money Ayuda',
        date: '05-13-2022',
        location: 'Brgy Tibay',
        time: '13:00',
        status: 'Active'
    },
    {
        transactionId: 'TRANSAC-002',
        beneficiary: 'Brgy Tibay',
        service: 'Grocery Ayuda',
        date: '05-13-2022',
        location: 'Brgy Tibay',
        time: '13:00',
        status: 'Active'
    },
    {
        transactionId: 'TRANSAC-003',
        beneficiary: 'Brgy Tibay',
        service: 'Food Ayuda',
        date: '05-13-2022',
        location: 'Brgy Tibay',
        time: '13:00',
        status: 'Active'
    },
];

const TransactionsTable = () => {
    return (
        <div>
            <Button variant="contained">ADD TRANSACTION</Button>
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
                        {rows.map((row) => (
                            <TableRow
                                key={row.transactionId}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.transactionId}
                            </TableCell>
                            <TableCell align="right">{row.beneficiary}</TableCell>
                            <TableCell align="right">{row.service}</TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="right">{row.location}</TableCell>
                            <TableCell align="right">{row.time}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TransactionsTable; 
