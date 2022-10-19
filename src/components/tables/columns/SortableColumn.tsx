// types
import { TableColumnProps } from 'types';

// mui
import { IconButton, Box } from '@material-ui/core';
import { ArrowDownward } from '@material-ui/icons';


/** render sort icon  */
export const SortableColumn = ({ classes, column }: TableColumnProps) => {
    return (
        <Box margin="auto">
            <IconButton
                onClick={() => null}
                style={{ padding: 0 }}
            >
                <ArrowDownward
                    className={classes.sortDown}
                />
            </IconButton>
        </Box>
    )
}