import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function PaymentInput({ formData, setFormData }) {
    const [payment, setPayment] = useState('');
    const [name, setName] = useState('');
    const [bank, setBank] = useState('');
    const [account, setAccount] = useState('');
    const [errors, setErrors] = useState({ payment: '', name: '', bank: '', account: '' });

    const regexNumericAccount = /^\d*$/;
    const regexTextName = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/;
    const regexPayment = /^\d{1,3},\d{3}\.\d{1,2}$|^\d{1,3},\d{3}$|^\d{1,6}\.\d{1,2}$|^\d{1,6}$/

    const handlePaymentChange = (event) => {
        let value = event.target.value

        setPayment(event.target.value);
        if (!regexPayment.test(value) && value.length != 0) {
            setErrors({ ...errors, payment: 'No es un formato vallido' });
        } else {
            setErrors({ ...errors, payment: '' });
        }
        
    };

    const handleNameChange = (event) => {
        let value = event.target.value.toUpperCase();
        let noSapaceValue = value.replace(/\s+/g, ' ');
        // let cleanValue = noSapaceValue.replace(!/\w/, "")

        setName(cleanValue);

        if (regexTextName.test(value) || value.length === 0) {
            setErrors({ ...errors, name: '' });
        } else {
            setErrors({ ...errors, name: 'Ingresa solo letras [A-Z]' });
        }
    };
    const handleNameBlur = (event) => {
        let value = event.target.value.trim();
        setName(value);
    };

    const handleAccountPaste = (event) => {
        let value = event.clipboardData.getData('Text').replace(/[\s-]/g, '');

        if (regexNumericAccount.test(value) && value.length <= 18) {
            setAccount(value);
            setErrors({ ...errors, account: "" });
        }
        if (!regexNumericAccount.test(value)) {
            setErrors({ ...errors, account: 'Ingresa unicamente numeros' });
        }
        if (value.length > 18 || value.length < 16 || value.length === 17) {
            setErrors({ ...errors, account: 'Número de Tarjeta o CLABE no válido' });
        }
    };

    const handleAccountChange = (event) => {
        let value = event.target.value.replace(/[\s-]/g, '');

        if (regexNumericAccount.test(value) && value.length <= 18) {
            setAccount(value);
            setErrors({ ...errors, account: "" });
        }
        if (!regexNumericAccount.test(value)) {
            setErrors({ ...errors, account: 'Ingresa unicamente numeros' });
        }
    };

    const handleAccountBlur = (event) => {
        let value = event.target.value;

        if (!(value.length === 18 || value.length === 16 || value.length === 0)) {
            setErrors({ ...errors, account: 'Número de Tarjeta o CLABE no válido' });
        }
        else {
            setErrors({ ...errors, account: "" })
        }
    };

    const handleBankChange = (event) => {
        setBank(event.target.value);
        setErrors({ ...errors, bank: '' });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newFormData = { payment, name, bank, account };
        if (
            ((regexNumericAccount.test(account)) && (account.length === 18 || account.length === 16)) &&
            (regexTextName.test(name) && name.length > 0)
        ) {
            setFormData([...formData, newFormData]);

            setPayment('');
            setName('');
            setBank('');
            setAccount('');
        };
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <TextField
                required
                id='name'
                label='Nombre'
                variant='outlined'
                value={name}
                onChange={handleNameChange}
                onBlur={handleNameBlur}
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