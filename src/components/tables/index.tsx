// react
import { Fragment } from 'react';

// utils
import { useTable } from 'utils/hooks';

// types
import { TableProps } from 'types';

// mui
import { Table, TableBody, TableContainer, TablePagination } from '@material-ui/core';

// components
import { TableColunms } from './TableColumns';
import { TableRowHandler } from './TableRowHandler';


export const TableComponent = ({
    classes,
    colDefs,
    rowData,
    size,
    paginated = true,
}: TableProps) => {
    // use table hook
    const { 
        handleChangePage, 
        handleChangeRowsPerPage, 
        page, 
        pagnatedRows 
    } = useTable(rowData);

    return (
        <Fragment>
            <TableContainer className={classes.tableContainer}>
                <Table stickyHeader>
                    <TableColunms
                        classes={classes}
                        colDefs={colDefs}
                    />
                    <TableBody>
                        <TableRowHandler
                            rows={paginated ? pagnatedRows : rowData}
                            colDefs={colDefs}
                        />
                    </TableBody>
                </Table>
            </TableContainer>
            {paginated && <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={size}
                rowsPerPage={page.rowsPer}
                page={page.number}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />}
        </Fragment>
    )
}