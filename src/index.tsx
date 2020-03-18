import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import { Auth0Provider } from './context/Auth0Context';
import { createBrowserHistory } from "history";


const onRedirectCallback = (appState?: any) => {
    createBrowserHistory().push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
};

ReactDOM.render(
    <Auth0Provider
        domain="l222p.auth0.com"
        client_id="FbA0A82vNeAtf00TdC0yyBmOMLK7kGPB"
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}>
        <App />
    </Auth0Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
