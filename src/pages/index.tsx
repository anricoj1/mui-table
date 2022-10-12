// types
import { PageProps } from 'types';

// utils
import { useCommentsMVC } from 'utils/models';
import { useGetComments } from 'utils/handlers';

// mui
import { withStyles } from '@material-ui/core';

// components
import { TableComponent } from 'components';

// styles
import { useStyles } from 'styles';


const CommentDashboard = ({ classes }: PageProps) => {
    // mvc
    const mvc = useCommentsMVC;

    // get comments
    const response = useGetComments();

    return (
        <div>
            <TableComponent
                classes={classes}
                colDefs={mvc.colDefs}
                response={response}
                errorMessage="No comments found"
            />
        </div>
    )
}

export default withStyles(useStyles)(CommentDashboard);