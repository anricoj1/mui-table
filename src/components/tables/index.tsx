// react
import { Fragment } from 'react';

// utils
import { useTable } from 'utils/hooks';

// types
import { TableProps } from 'types';

// mui
import { Table, TableBody, TableContainer, TablePagination } from '@material-ui/core';

// components
import { TableColunms } from './columns';
import { TableRows } from './rows';


export const TableComponent = ({
    classes,
    colDefs,
    queryKey,
    queryFn,
    errorMessage,
    paginated = true,
}: TableProps) => {
    // table hook
    const tableApi = useTable({
        queryKey,
        queryFn,
        paginated
    });

    // values from hook api
    const {
        page,
        size,
        handleChangePage,
        handleChangeRowsPerPage
    } = tableApi;

    return (
        <Fragment>
            <TableContainer className={classes.tableContainer}>
                <Table stickyHeader>
                    <TableColunms
                        classes={classes}
                        colDefs={colDefs}
                    />
                    <TableBody>
                        {/* <TableRows
                            rows={paginated ? tableHook.paginatedRows : responseData}
                            colDefs={colDefs}
                            isLoading={response.isLoading}
                            errorMessage={errorMessage}
                        /> */}
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