import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function PaymentInput() {
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

    const handleAccountPaste = (event) => { // Valida la cuenta pegada
        let value = event.clipboardData.getData('Text').replace(/[\s-]/g, '');

        if (/^\d*$/.test(value) && value.length <= 18) {
            setAccount(value);
            setErrors({ ...errors, account: "" })
        }
        if (!/^\d*$/.test(value)) {
            setErrors({ ...errors, account: 'Ingresa unicamente numeros' })
        }
        if (value.length > 18 || value.length < 16 || value.length === 17) {
            setErrors({ ...errors, account: 'Número de Tarjeta o CLABE no válido' })
        }
    };

    const handleAccountChange = (event) => { // Valida la cuenta escrita
        let value = event.target.value.replace(/[\s-]/g, '');

        if (/^\d*$/.test(value) && value.length <= 18) {
            setAccount(value);
            setErrors({ ...errors, account: "" })
        }
        if (!/^\d*$/.test(value)) {
            setErrors({ ...errors, account: 'Ingresa unicamente numeros' })
        }
    };

    const handleAccountBlur = (event) => {
        let value = event.target.value

        if (value.length > 18 || value.length < 16 || value.length === 17) {
            setErrors({ ...errors, account: 'Número de Tarjeta o CLABE no válido' })
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();


        setFormData([...formData, newFormData]);

        // Limpiar los campos del formulario después de agregar
        setPayment('');
        setName('');
        setBank('');
        setAccount('');

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
                    sx={{ marginRight: 2 }}
                />
                <TextField
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
                    id='bank'
                    label='Banco'
                    variant='outlined'
                    value={bank}
                    onChange={handleBankChange}
                    error={!!errors.bank}
                    helperText={errors.bank}
                    sx={{ marginRight: 2 }}
                />
                <TextField
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
                <Button variant="contained" type="submit">Agregar</Button>

            </form>


        </>
    );
}