import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { useAuth0 } from '../context/Auth0Context';


const PrivateRoute = (props: RouteProps) => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    if (!isAuthenticated) {
        loginWithRedirect({})
    }

    const {
        component, exact, location,
        path, render, sensitive, strict,
    } = props;
    return (
        <Route
            component={component}
            exact={exact}
            location={location}
            path={path}
            render={render}
            sensitive={sensitive}
            strict={strict}
        />
    );
}

export default PrivateRoute;