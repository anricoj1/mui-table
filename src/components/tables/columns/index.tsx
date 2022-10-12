// types
import { ColumnDef, TableColumnsProps } from 'types';

// mui
import { TableRow, TableHead } from '@material-ui/core';

// components
import { TableColumn } from './TableColumn';

//** render the table columns */
export const TableColunms = ({ colDefs, classes }: TableColumnsProps) => {
    return (
        <TableHead>
            <TableRow>
                {colDefs.map((column: ColumnDef) => (
                    <TableColumn
                        key={column.headerName}
                        classes={classes}
                        column={column}
                    />
                ))}
            </TableRow>
        </TableHead>
    )
}