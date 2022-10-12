// react
import { createContext } from 'react';
import { AppStateProps } from 'types';

// media query context
export const MediaQueryContext = createContext(null || {});

// app state context
export const AppState = createContext<AppStateProps>({
    media: {
        "1025": false,
    }
});