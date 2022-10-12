
// context
import { AppState } from 'utils/context';

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
            <AppState.Provider value={{ media }}>

            </AppState.Provider>
        </div>
    )
}

export default App;