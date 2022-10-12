

// react-dom
import { render } from 'react-dom';

// react query
import { QueryClient, QueryClientProvider } from "react-query";

// app
import App from './App';

// css
import './index.css';

// create query client
const queryClient = new QueryClient();

render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>,
    document.getElementById('root')
);