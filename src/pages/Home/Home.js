import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableFooter, TablePagination, TableRow, Paper, TableHead, Button } from '@material-ui/core';
import TablePaginationActions from '../../components/elements/TablePagination/TablePaginationActions';
import useStyles from './useStyles';

import ENDPOINT from '../../configs/services';

export default function CustomPaginationActionsTable() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [dataProject, setDataProject] = useState([]);
  const emptyRows = dataProject.length > rowsPerPage ?
    rowsPerPage - Math.min(rowsPerPage, dataProject.length - page * rowsPerPage) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getDataProject = async () => {
    const { success = false, data = []} = await ENDPOINT.getProject();
    if (success) {
      setDataProject(data);
    }
  };

  useEffect(() => {
    getDataProject();
  }, []);



  return (
    <section>
      <TableContainer component={Paper}>
        <Table aria-label="custom pagination table" className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell component="th">No.</TableCell>
              <TableCell>Document</TableCell>
              <TableCell>Detail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? dataProject.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : dataProject
            ).map((item, index) => (
              <TableRow key={index}>
                <TableCell component="th">
                  {index + 1 + (page * rowsPerPage)}
                </TableCell>
                <TableCell>{item.documentName}</TableCell>
                <TableCell><Button>Detail</Button></TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={3} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                ActionsComponent={TablePaginationActions}
                colSpan={6}
                count={dataProject.length}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </section>
  );
}

