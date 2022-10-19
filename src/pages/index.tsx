// types
import { PageProps } from 'types';

// utils
import { CommentsMVC } from 'utils/models';

// mui
import { withStyles } from '@material-ui/core';

// components
import { TableComponent } from 'components';

// styles
import { useStyles } from 'styles';


const CommentDashboard = ({ classes }: PageProps) => {
    return (
        <div>
            <TableComponent
                classes={classes}
                {...CommentsMVC.table}
            />
        </div>
    )
}

export default withStyles(useStyles)(CommentDashboard);