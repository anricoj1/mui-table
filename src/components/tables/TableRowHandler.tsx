// react
import { Fragment } from 'react';

// types
import { ColumnDef } from 'types';

// mui
import { TableCell, TableRow } from '@material-ui/core';

export const TableRowHandler = ({
    rows,
    colDefs
}: {
    rows: any[],
    colDefs: ColumnDef[]
}) => {
    return (
        <Fragment>
            {rows.map((row: any) => (
                <TableRow key={JSON.stringify(row)}>
                    {colDefs.map((column: ColumnDef) => {
                        let fieldKey = column.field;
                        let componentKey = column.cellRenderer;

                        if (fieldKey) {
                            return (
                                <TableCell key={fieldKey}>
                                    {row[fieldKey]}
                                </TableCell>
                            )
                        }

                        return (
                            <TableCell key={column.headerName}>
                                Render Component
                            </TableCell>
                        );
                    })}
                </TableRow>
            ))}
        </Fragment>
    )
}