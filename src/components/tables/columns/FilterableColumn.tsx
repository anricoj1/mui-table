// utils
import { useFilterableColumn  } from 'utils/hooks';

// types
import { TableColumnProps } from 'types';

// mui
import { IconButton, Box, Popover, TextField } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';


//** filterable column */
export const FilterableColumn = ({ classes, column }: TableColumnProps) => {
    // handle filter logic
    const hook = useFilterableColumn();

    return (
        <Box margin="auto">
            <IconButton
                className={classes.moreVertBtn}
                onClick={hook.handlePopoverOpen}
            >
                <MoreVert className={classes.moreVertIcon} />
            </IconButton>
            <Popover
                open={hook.open}
                onClose={hook.handlePopoverClose}
                anchorEl={hook.anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <div style={{
                    display: 'flex',
                    height: '10vh',
                    width: '25vw',
                }}>
                    <TextField
                        style={{
                            margin: 'auto'
                        }}
                        label={`${column.headerName} filter`}
                        variant="outlined"
                    />
                </div>
            </Popover>
        </Box>
    )
}