import React from 'react';

import ErrorBoundary from './error-boundary';
import AppRouter from './router';

function App() {
    return (
        <ErrorBoundary>
            <AppRouter />
        </ErrorBoundary>
    );
}

export default App;
