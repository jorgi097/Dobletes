import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function PaymentInput({ formData, setFormData }) {
    const [payment, setPayment] = useState('');
    const [name, setName] = useState('');
    const [bank, setBank] = useState('');
    const [account, setAccount] = useState('');
    const [errors, setErrors] = useState({ payment: '', name: '', bank: '', account: '' });

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

    const handleAccountPaste = (event) => {
        let value = event.clipboardData.getData('Text').replace(/[\s-]/g, '');

        if (/^\d*$/.test(value) && value.length <= 18) {
            setAccount(value);
            setErrors({ ...errors, account: "" });
        }
        if (!/^\d*$/.test(value)) {
            setErrors({ ...errors, account: 'Ingresa unicamente numeros' });
        }
        if (value.length > 18 || value.length < 16 || value.length === 17) {
            setErrors({ ...errors, account: 'Número de Tarjeta o CLABE no válido' });
        }
    };

    const handleAccountChange = (event) => {
        let value = event.target.value.replace(/[\s-]/g, '');

        if (/^\d*$/.test(value) && value.length <= 18) {
            setAccount(value);
            setErrors({ ...errors, account: "" });
        }
        if (!/^\d*$/.test(value)) {
            setErrors({ ...errors, account: 'Ingresa unicamente numeros' });
        }
    };

    const handleAccountBlur = (event) => {
        let value = event.target.value;

        if (!(value.length === 18 || value.length === 16 || value.length === 0)) {
            setErrors({ ...errors, account: 'Número de Tarjeta o CLABE no válido' });
        }
        else{
            setErrors({...errors, account: ""})
        }
    };


    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        if ((/^\d*$/.test(account)) && (account.length === 18 || account.length === 16)){
            const newFormData = { payment, name, bank, account };

            setFormData([...formData, newFormData]);

            setPayment('');
            setName('');
            setBank('');
            setAccount('');
        } else if(!(account.length === 18 || account.length === 16)){
            setErrors({ ...errors, account: 'Número de Tarjeta o CLABE no válido' });
        } else if (!/^\d*$/.test(account)) {
            setErrors({ ...errors, account: 'Ingresa unicamente numeros' });
        }
        
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <TextField
                required
                id='name'
                label='Nombre'
                variant='outlined'
                value={name}
                onChange={handleNameChange}
                error={!!errors.name}
                helperText={errors.name}
                sx={{ marginRight: 2 }}
            />
            <TextField
                required
                id='payment'
                label='Cantidad'
                variant='outlined'
                value={payment}
                onChange={handlePaymentChange}
                error={!!errors.payment}
                helperText={errors.payment}
                sx={{ marginRight: 2 }}
            />
            <TextField
                required
                id='account'
                label='Tarjeta o CLABE'
                variant='outlined'
                value={account}
                onChange={handleAccountChange}
                onPaste={handleAccountPaste}
                onBlur={handleAccountBlur}
                error={!!errors.account}
                helperText={errors.account}
                autoComplete="off"
                sx={{ marginRight: 2 }}
            />
            <TextField
                required
                id='bank'
                label='Banco'
                variant='outlined'
                value={bank}
                onChange={handleBankChange}
                error={!!errors.bank}
                helperText={errors.bank}
                sx={{ marginRight: 2 }}
            />
            <Button variant="contained" type="submit">Agregar</Button>
        </form>
    );
}