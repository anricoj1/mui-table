// types
import { ColumnDef, TableRowProps } from 'types';

// mui
import { TableCell, TableRow } from '@material-ui/core';


/** render a table row */
export const TableRowComponent = ({
    row,
    colDefs
}: TableRowProps) => {
    return (
        <TableRow>
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
    )
}