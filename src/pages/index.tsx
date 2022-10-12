// types
import { PageProps } from 'types';

// mui
import { withStyles } from '@material-ui/core';

// styles
import { useStyles } from 'styles';


const CommentDashboard = ({ classes }: PageProps) => {
    return (
        <div>Comment Dashboard</div>
    )
}

export default withStyles(useStyles)(CommentDashboard);