import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Autocomplete, Stack } from '@mui/material';
import banks from './banks'

export default function PaymentInput({ formData, setFormData }) {
    const [payment, setPayment] = useState('');
    const [name, setName] = useState('');
    const [bank, setBank] = useState('');
    const [bankInput, setBankInput] = useState('');
    const [account, setAccount] = useState('');
    const [errors, setErrors] = useState({ payment: '', name: '', account: '', bank: '' });

    const regexNumericAccount = /^\d*$/;
    const regexAccount = /^[\d]{16}$|^[\d]{18}$/
    const regexTextName = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/;
    const regexPayment = /^\d{1,3},\d{3}\.\d{2}$|^\d{1,6}\.\d{2}$/


    const handleNameChange = (event) => {
        let value = event.target.value.toUpperCase();
        let cleanValue = value.replace(/[^A-Za-zñÑáéíóúÁÉÍÓÚ\s]/g, "");
        setName(cleanValue);

        if (regexTextName.test(name) || value.length === 0) {
            setErrors({ ...errors, name: '' });
        }
    };

    const handleNameBlur = (event) => {
        let value = event.target.value.trim();
        let noSapaceValue = value.replace(/\s+/g, ' ');
        setName(noSapaceValue)

        if (regexTextName.test(name) || value.length === 0) {
            setErrors({ ...errors, name: '' });
        } else {
            setErrors({ ...errors, name: 'Ingresa solo letras [A-Z]' });
        }

    };

    const handlePaymentPaste = (event) => {
        let value = event.clipboardData.getData('Text');
        value = value.replace(/[\s-$]/g, '');
        if (value.length === 0 ||
            /^\d{1,6}\.?$/.test(value) ||
            /^\d{1,3},{1}\d{0,3}\.?$/.test(value) ||
            /^\d{1,6}\.{1}\d{0,2}$/.test(value) ||
            /^\d{1,3},{1}\d{3}\.{1}\d{0,2}$/.test(value) ||
            /^\d{0,3},\d{3}\.?\d{0,2}$/.test(value)) {

            setPayment(value);
            setErrors({ ...errors, payment: '' });
        }

    };

    const handlePaymentChange = (event) => {
        let value = event.target.value;

        if (value.length === 0 ||
            /^\d{1,6}\.?$/.test(value) ||
            /^\d{1,3},{1}\d{0,3}\.?$/.test(value) ||
            /^\d{1,6}\.{1}\d{0,2}$/.test(value) ||
            /^\d{1,3},{1}\d{3}\.{1}\d{0,2}$/.test(value) ||
            /^\d{0,3},\d{3}\.?\d{0,2}$/.test(value)) {

            setPayment(value);
            setErrors({ ...errors, payment: '' });
        }
    };

    const handlePaymentBlur = (event) => {
        let value = event.target.value;


        if (/^\d*,?\d*\.{1}[0-9]{2}$/.test(value) || value.length === 0) {
            setPayment(value);
            setErrors({ ...errors, payment: '' });
        }
        else if (/^\d*,?\d*\.{1}[0-9]{1}$/.test(value)) {
            value = value + "0";
            setPayment(value);
            setErrors({ ...errors, payment: '' });
        } else if (/^\d*,?\d*\.{1}$/.test(value)) {
            value = value + "00";
            setPayment(value);
            setErrors({ ...errors, payment: '' });
        } else if (/^\d*,?\d*$/.test(value) && value.length != 0) {
            value = value + ".00";
            setPayment(value);
            setErrors({ ...errors, payment: '' });
        } 
        if(!regexPayment.test(value)) {
            setErrors({ ...errors, payment: 'No es un formato válido' });
        }




    }

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

    const handleBankChange = (event, value, reason) => {
        if (reason === "selectOption" && value) {
            setBank(value.label);
            setBankInput(value.label);
        }
        if (reason === "clear" || reason === "reset") {
            setBank('');
            setBankInput('');
        }
    };

    const handleBankInputChange = (event, value, reason) => {
        console.log(event);
        if (reason === "input") {
            let newValue = value.toUpperCase();
            newValue = newValue.replace(/[^A-Za-zñÑáéíóúÁÉÍÓÚ\s-]/g, "");
            newValue = newValue.replace(/\s+/g, ' ');
            setBankInput(newValue);
        }
    };

    const handleBankBlur = () => {
        let value = bankInput;
        value = value.trim();
        const foundBank = banks.find(bank => bank.label === value);
        if (!!foundBank) {
            setBank(foundBank.label);
            setBankInput(foundBank.label);
        }else{
            setBank("");
            setBankInput("");
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newFormData = { payment, name, bank, account };

        if (
            (regexAccount.test(account)) &&
            (regexTextName.test(name) && name.length > 0) &&
            (regexPayment.test(payment)) &&
            (!!bank)
        ) {
            setFormData([...formData, newFormData]);
            

            setPayment('');
            setName('');
            setBank('');
            setAccount('');
            setBankInput('')
        };
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <Stack spacing={1} >
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
                    onPaste={handlePaymentPaste}
                    onChange={handlePaymentChange}
                    onBlur={handlePaymentBlur}
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
                <Autocomplete
                    required
                    autoSelect
                    value={bank}
                    inputValue={bankInput}
                    id="bank"
                    options={banks}
                    onChange={handleBankChange}
                    onInputChange={handleBankInputChange}
                    renderInput={(params) => (
                        <TextField {...params} label="Banco" variant='outlined' onBlur={handleBankBlur}/>
                    )}
                />

                <Button variant="contained" type="submit">Agregar</Button>
            </Stack>
        </form>
    );
}