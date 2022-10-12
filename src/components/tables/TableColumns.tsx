// react
import { useState, Fragment } from 'react';

// types
import { ColumnDef } from 'types';

// mui
import {
    TableCell,
    TableRow,
    TableHead,
    IconButton,
    Box,
    Popover,
    TextField
} from '@material-ui/core';
import { ArrowDownward, MoreVert } from '@material-ui/icons';

//** render the table columns */
export const TableColunms = ({
    colDefs,
    classes
}: {
    colDefs: ColumnDef[],
    classes: any
}) => {
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

/** render table column */
export const TableColumn = ({
    classes,
    column
}: {
    classes: any,
    column: ColumnDef
}) => {
    // expandable state
    const [sorted, setSorted] = useState<boolean>(false);

    // anchor element for popover
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    // open
    const open = Boolean(anchorEl);

    // handle sort click
    const handleSortClick = () => setSorted(!sorted);

    // handle popover close
    const handlePopoverClose = () => setAnchorEl(null);

    // handle popover open
    const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    return (
        <Fragment>
            <TableCell
                className={classes.tablecell}
                key={column.headerName}
            >
                <Box display="flex">
                    <Box margin="auto">
                        {column.headerName}
                    </Box>
                    {column.sortable && (
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
                    )}
                    <Box margin="auto">
                        <IconButton
                            className={classes.moreVertBtn}
                            onClick={handlePopoverOpen}
                        >
                            <MoreVert className={classes.moreVertIcon} />
                        </IconButton>
                        <Popover
                            open={open}
                            onClose={handlePopoverClose}
                            anchorEl={anchorEl}
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
                </Box>
            </TableCell>
        </Fragment>
    )
}