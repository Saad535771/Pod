import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Data from "./BasicData";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: '20px', fontWeight:'bold' }}>Serial Number</TableCell>
            <TableCell style={{ fontWeight:'bold'}} align="center">Podmatch ID</TableCell>
            <TableCell style={{ fontWeight:'bold'}} align="center">Podmatch Picture</TableCell>
            <TableCell style={{ fontWeight:'bold'}} align="center">Podmatch Name</TableCell>
            <TableCell style={{ fontWeight:'bold'}} align="center">Effective Inventory</TableCell>
            <TableCell style={{ fontWeight:'bold'}} align="center">State</TableCell>
            <TableCell style={{ fontWeight:'bold'}} align="center">Operate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.col2}</TableCell>
              <TableCell align="center">
              <img
                  src={row.imageUrl}
                  style={{ width: '90px', height: '90' }}></img>
              </TableCell>
              <TableCell align="center">{row.col3}</TableCell>
              <TableCell align="center">{row.col4}</TableCell>
              <TableCell align="center">{row.col5}</TableCell>
              <TableCell align="center">{row.col6}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
