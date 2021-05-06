import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { MainLayout } from '../layouts';
const Posts = lazy(() => import('../pages/posts/posts'));

export default function AppRouter() {
    return (
        <MainLayout>
            <Router>
                <Switch>
                    <Route path="/" exact render={() => <Redirect to="posts" />} />
                    <Suspense fallback={'loading...'}>
                        <Route path="/posts" exact render={() => <Posts />} />
                    </Suspense>
                    <Route path="*" render={() => <Redirect to="/" />} />
                </Switch>
            </Router>
        </MainLayout>
    );
}
