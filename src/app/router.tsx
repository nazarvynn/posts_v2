import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { AuthLayout, MainLayout } from '../layouts';
const Login = lazy(() => import('../pages/login/login'));
const Posts = lazy(() => import('../pages/posts/posts'));

export default function AppRouter() {
    const user = false;
    return (
        <>
            {user ? (
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
            ) : (
                <AuthLayout>
                    <Suspense fallback={'loading...'}>
                        <Login />
                    </Suspense>
                </AuthLayout>
            )}
        </>
    );
}
