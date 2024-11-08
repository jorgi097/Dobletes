import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableFooter, Typography } from '@mui/material';

export default function PaymentTable({ formData }) {
    if (formData.length === 0) {
        return null;
    } else {
        let totalPayment = formData.reduce((accumulator, item) => {
            return accumulator + parseFloat(item.payment);
        }, 0);
        let totalPaymentFixed = totalPayment.toFixed(2);


        return (
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">NOMBRE</TableCell>
                            <TableCell align="right">CANTIDAD</TableCell>
                            <TableCell align="center">TARJETA Ó CLABE</TableCell>
                            <TableCell align="center">BANCO</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {formData.map((data, index) => (
                            <TableRow key={index}>
                                <TableCell align="left">{data.name}</TableCell>
                                <TableCell align="right">{data.payment}</TableCell>
                                <TableCell align="center">{data.account}</TableCell>
                                <TableCell align="center">{data.bank}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter >
                        <TableRow>
                            <TableCell align="right">
                                <Typography variant="subtitle1" color="textSecondary">
                                TOTAL
                                </Typography>
                                
                                </TableCell>
                            <TableCell align="right">
                                <Typography variant="h6" color="primary">
                                {totalPaymentFixed}
                                </Typography>
                                
                                </TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
            
        );
    }
}
