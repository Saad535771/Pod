import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('John', 'John@gmail.com', 'USA', 'Podcaster', '+23412434'),
  createData('Mr Ali', 'Ali@gmail.com', 'Pakistan', 'Podcaster', '+23412434'),
  createData('Usama', 'Usama@gmail.com', 'Pakistan', 'Podcaster', '+23412434'),
  createData('Saad', 'Saad@gmail.com', 'USA', 'Podcaster', '+23412434'),
  createData('Zia', 'Zia@gmail.com', 'USA', 'Podcaster', '+23412434'),
];
export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell align="right"><b>Email</b></TableCell>
            <TableCell align="right"><b>Address</b></TableCell>
            <TableCell align="right"><b>Status</b></TableCell>
            <TableCell align="right"><b>Contact</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
