// react
import { Fragment } from 'react';

// utils
import { useTable } from 'utils/hooks';
import { TableContext } from 'utils/context';

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
    response,
    errorMessage,
    paginated = true,
}: TableProps) => {
    // reassign data to null if unknown
    const responseData: any = response.data ? response.data : null;

    // use table hook
    const tableHook = useTable({
        rows: responseData
    });

    return (
        <Fragment>
            <TableContext.Provider value={{ data: responseData }}>
                <TableContainer className={classes.tableContainer}>
                    <Table stickyHeader>
                        <TableColunms
                            classes={classes}
                            colDefs={colDefs}
                        />
                        <TableBody>
                            <TableRows
                                rows={paginated ? tableHook.paginatedRows : responseData}
                                colDefs={colDefs}
                                isLoading={response.isLoading}
                                errorMessage={errorMessage}
                            />
                        </TableBody>
                    </Table>
                </TableContainer>
                {paginated && <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={tableHook.size}
                    rowsPerPage={tableHook.page.rowsPer}
                    page={tableHook.page.number}
                    onPageChange={tableHook.handleChangePage}
                    onRowsPerPageChange={tableHook.handleChangeRowsPerPage}
                />}
            </TableContext.Provider>
        </Fragment>
    )
}