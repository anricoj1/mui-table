// react
import { Fragment } from 'react';

// types
import { TableColumnProps } from 'types';

// mui
import { TableCell, Box } from '@material-ui/core';

// components
import { SortableColumn } from './SortableColumn';
import { FilterableColumn } from './FilterableColumn';


/** render table column */
export const TableColumn = ({ classes, column }: TableColumnProps) => {
    return (
        <Fragment>
            <TableCell
                className={classes.tableCell}
                key={column.headerName}
            >
                <Box display="flex">
                    <Box margin="auto">
                        {column.headerName}
                    </Box>
                    {column.sort && <SortableColumn
                        classes={classes}
                        column={column}
                    />}
                    {column.filter && <FilterableColumn
                        classes={classes}
                        column={column}
                    />}
                </Box>
            </TableCell>
        </Fragment>
    )
}