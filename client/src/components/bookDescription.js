import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@material-ui/core';
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
const BookDescription = ({ book }) => {
    return (
        <>
            <Box sx={{ ...style, width: 400 }}>
                    <h2 id="parent-modal-title">Book Info</h2>
                    <p id="parent-modal-description">
                    <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="Book Info">
                        <TableBody>
                            <TableRow
                            key="name"
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                Name:
                            </TableCell>
                            <TableCell align="right">{book.name}</TableCell>
                            </TableRow>
                            <TableRow
                            key="Author"
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                Author:
                            </TableCell>
                            <TableCell align="right">{book.author}</TableCell>
                            </TableRow>
                            <TableRow
                            key="price"
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                Price:
                            </TableCell>
                            <TableCell align="right">{book.price}</TableCell>
                            </TableRow>
                            <TableRow
                            key="isbn"
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                ISBN:
                            </TableCell>
                            <TableCell align="right">{book.isbn}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    </TableContainer>
                    </p>    
                </Box>
        </>
    );
}
export default BookDescription;