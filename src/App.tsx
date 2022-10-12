// mui styles
import { useMedia } from 'styles';
import { useTheme } from '@material-ui/core';

// pages
import CommentsDashboard from 'pages';

const App = () => {
    // media
    let theme = useTheme();
    let media = useMedia(theme);

    return (
        <div className="App">
            <CommentsDashboard />
        </div>
    )
}

export default App;