// react
import { Fragment } from 'react';

// types
import { TableRowsProps } from 'types';

// mui
import { TableCell, TableRow } from '@material-ui/core';

// components
import { TableRowComponent } from './TableRowComponent';

/** render tables rows */
export const TableRows = ({
    rows,
    colDefs,
    isLoading,
    errorMessage
}: TableRowsProps) => {
    return (
        <Fragment>
            {isLoading && <TableRow>
                <TableCell colSpan={colDefs.length}>
                    Loading...
                </TableCell>
            </TableRow>}
            {!isLoading && rows && rows.map((row: any) => (
                <TableRowComponent
                    key={JSON.stringify(row)}
                    row={row}
                    colDefs={colDefs}
                />
            ))}
            {!isLoading && !rows && <TableRow>
                <TableCell colSpan={colDefs.length}>
                    {errorMessage}
                </TableCell>
            </TableRow>}
        </Fragment>
    )
}
