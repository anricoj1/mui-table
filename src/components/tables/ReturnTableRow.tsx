// types
import { ReturnValues, SessionProps } from 'types';

// controllers
import { getReturnInfo } from 'utils/controllers/returns';

// mui
import { TableRow, TableCell, Button, Tooltip } from '@material-ui/core';
import { RemoveCircleOutline, CheckCircleOutline } from '@material-ui/icons';


export const ReturnTableRow = ({ row, session }: { row: ReturnValues, session: SessionProps }) => {
    // get return info
    const { total, closed, count } = getReturnInfo({
        products: row.products
    });

    return (
        <TableRow>
            <TableCell>{row.ReturnID}</TableCell>
            <TableCell>{row.CustomerName}</TableCell>
            <TableCell>{row.Manager}</TableCell>
            <TableCell>{row.ReturnAction}</TableCell>
            <TableCell>
                {`${count} ${count > 1 ? 'items' : 'item'}`}
            </TableCell>
            <TableCell>${total}</TableCell>
            <TableCell>
                {row.ReturnDateTime}
            </TableCell>
            <TableCell>
                {closed ? <CheckCircleOutline
                    style={{
                        color: 'green'
                    }}
                /> : <RemoveCircleOutline
                    style={{
                        color: 'red'
                    }}
                />}
            </TableCell>
            <TableCell>
                <Tooltip title={`View Return ${row.ReturnID}`}>
                    <Button variant='outlined' color='primary'>
                        View
                    </Button>
                </Tooltip>
            </TableCell>
            {session.RoleType !== 'user' && <TableCell>
                <Tooltip title={`Delete Return ${row.ReturnID}`}>
                    <Button variant='outlined' color='secondary'>
                        Delete
                    </Button>
                </Tooltip>
            </TableCell>}
        </TableRow>
    )
}