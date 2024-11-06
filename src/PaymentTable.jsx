import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function PaymentTable({ formData }) {
    if (formData.length === 0) {
        return null;
    }else{
        return (
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Cantidad</TableCell>
                            <TableCell>Tarjeta o CLABE</TableCell>
                            <TableCell>Banco</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {formData.map((data, index) => (
                            <TableRow key={index}>
                                <TableCell>{data.name}</TableCell>
                                <TableCell>{data.payment}</TableCell>
                                <TableCell>{data.account}</TableCell>
                                <TableCell>{data.bank}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }    
}
