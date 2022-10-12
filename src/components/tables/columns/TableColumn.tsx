// react
import { Fragment, useContext } from 'react';

// utils
import { TableContext } from 'utils/context';

// types
import { TableColumnProps } from 'types';

// mui
import { TableCell, Box } from '@material-ui/core';

// components
import { SortableColumn } from './SortableColumn';
import { FilterableColumn } from './FilterableColumn';


/** render table column */
export const TableColumn = ({ classes, column }: TableColumnProps) => {
    // context
    const { data } = useContext(TableContext);

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
                    {column.sortable && <SortableColumn
                        classes={classes}
                        column={column}
                    />}
                    {column.filterable && <FilterableColumn
                        classes={classes}
                        column={column}
                    />}
                </Box>
            </TableCell>
        </Fragment>
    )
}