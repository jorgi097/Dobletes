import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';

export default function CardInput() {
    const [formData, setFormData] = useState([]);
    const [payment, setPayment] = useState('');
    const [name, setName] = useState('');
    const [bank, setBank] = useState('');
    const [account, setAccount] = useState('');
    const [errors, setErrors] = useState({
        payment: '',
        name: '',
        bank: '',
        account: ''
    });

    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
        setErrors({ ...errors, payment: '' });
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
        setErrors({ ...errors, name: '' });
    };

    const handleBankChange = (event) => {
        setBank(event.target.value);
        setErrors({ ...errors, bank: '' });
    };

    const handleAccountChange = (event) => {
        setAccount(event.target.value);
        setErrors({ ...errors, account: '' });
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            payment: '',
            name: '',
            bank: '',
            account: ''
        };

        if (!payment.trim()) {
            newErrors.payment = 'El campo Pago es obligatorio.';
            valid = false;
        }
        if (!name.trim()) {
            newErrors.name = 'El campo Nombre es obligatorio.';
            valid = false;
        }
        if (!bank.trim()) {
            newErrors.bank = 'El campo Banco es obligatorio.';
            valid = false;
        }
        if (!account.trim()) {
            newErrors.account = 'El campo Tarjeta o CLABE es obligatorio.';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            const newFormData = {
                payment: payment,
                name: name,
                bank: bank,
                account: account
            };

            setFormData([...formData, newFormData]);

            // Limpiar los campos del formulario después de agregar
            setPayment('');
            setName('');
            setBank('');
            setAccount('');
        }
    };

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <TextField
                    id='payment'
                    label='Pago'
                    variant='outlined'
                    value={payment}
                    onChange={handlePaymentChange}
                    error={!!errors.payment}
                    helperText={errors.payment}
                />
                <TextField
                    id='name'
                    label='Nombre'
                    variant='outlined'
                    value={name}
                    onChange={handleNameChange}
                    error={!!errors.name}
                    helperText={errors.name}
                />
                <TextField
                    id='bank'
                    label='Banco'
                    variant='outlined'
                    value={bank}
                    onChange={handleBankChange}
                    error={!!errors.bank}
                    helperText={errors.bank}
                />
                <TextField
                    id='account'
                    label='Tarjeta o CLABE'
                    variant='outlined'
                    value={account}
                    onChange={handleAccountChange}
                    error={!!errors.account}
                    helperText={errors.account}
                />
                <Button variant="contained" type="submit">Agregar</Button>
            </form>

            {/* Mostrar los datos en una tabla */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pago</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Banco</TableCell>
                            <TableCell>Tarjeta o CLABE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {formData.map((data, index) => (
                            <TableRow key={index}>
                                <TableCell>{data.payment}</TableCell>
                                <TableCell>{data.name}</TableCell>
                                <TableCell>{data.bank}</TableCell>
                                <TableCell>{data.account}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
