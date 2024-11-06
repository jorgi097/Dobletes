import React, { useState } from 'react';
import PaymentInput from './PaymentInput';
import PaymentTable from './PaymentTable';

export default function PaymentPage() {
    const [formData, setFormData] = useState([]);

    return (
        <>
            <PaymentInput formData={formData} setFormData={setFormData} />
            <PaymentTable formData={formData} />
        </>
    );
}
