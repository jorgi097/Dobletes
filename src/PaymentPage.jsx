import React, { useState } from 'react';
import PaymentInput from './PaymentInput';
import PaymentTable from './PaymentTable';
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container'


export default function PaymentPage() {
    const [formData, setFormData] = useState([]);

    return (
        <>
        <Container>

            <Grid container columnSpacing={4} sx={{marginTop: 4}}>
                <Grid size={4}>
                    <PaymentInput formData={formData} setFormData={setFormData} />
                </Grid>
                <Grid size={8}>
                    <PaymentTable formData={formData} /></Grid>
            </Grid>
        </Container>

        </>
    );
}
