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
    const { data, isLoading, isSuccess } = useGetComments();

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {isSuccess && <TableComponent
                classes={classes}
                colDefs={mvc.colDefs}
                rowData={data}
                size={data.length}
            />}
        </div>
    )
}

export default withStyles(useStyles)(CommentDashboard);