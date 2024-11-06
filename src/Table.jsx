import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';




export default function Table() {


    return (
        <>
            {/* Mostrar los datos en una tabla */}
            < TableContainer component={Paper} >
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
            </TableContainer >
        </>
    )
}