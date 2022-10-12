// utils
import { useSortableColumn } from 'utils/hooks';

// types
import { TableColumnProps } from 'types';

// mui
import { IconButton, Box } from '@material-ui/core';
import { ArrowDownward } from '@material-ui/icons';


/** render sort icon  */
export const SortableColumn = ({ classes, column }: TableColumnProps) => {
    // handle sort logic
    const { sorted, handleSortClick } = useSortableColumn();

    return (
        <Box margin="auto">
            <IconButton
                onClick={handleSortClick}
                style={{ padding: 0 }}
            >
                <ArrowDownward
                    className={sorted ? classes.sortUp : classes.sortDown}
                />
            </IconButton>
        </Box>
    )
}