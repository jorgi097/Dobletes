import React, { useState } from 'react';
import PaymentInput from './PaymentInput';
import PaymentTable from './PaymentTable';
import  Grid  from '@mui/material/Grid2';

export default function PaymentPage() {
    const [formData, setFormData] = useState([]);

    return (
        <>
            <Grid container spacing={1}>
                <Grid size={3}>
                    <PaymentInput formData={formData} setFormData={setFormData} />
                </Grid>
                <Grid size={9}>
                    <PaymentTable formData={formData} /></Grid>
            </Grid>
        </>
    );
}
