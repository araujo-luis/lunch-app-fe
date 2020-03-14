import React, { useContext, useState, useEffect } from "react";
import createAuth0Client from "@auth0/auth0-spa-js";
import Auth0Client from "@auth0/auth0-spa-js/dist/typings/Auth0Client";

interface Auth0ProviderOptions {
    children: React.ReactElement;
    onRedirectCallback?(result: RedirectLoginResult): void;
}

interface Auth0Context {
    isAuthenticated: boolean;
    user: any;
    loading: boolean;
    popupOpen: boolean;
    loginWithPopup(options: PopupLoginOptions): Promise<void>;
    handleRedirectCallback(): Promise<RedirectLoginResult>;
    getIdTokenClaims(o?: getIdTokenClaimsOptions): Promise<IdToken>;
    loginWithRedirect(o: RedirectLoginOptions): Promise<void>;
    getTokenSilently(o?: GetTokenSilentlyOptions): Promise<string | undefined>;
    getTokenWithPopup(o?: GetTokenWithPopupOptions): Promise<string | undefined>;
    logout(o?: LogoutOptions): void;
}

const DEFAULT_REDIRECT_CALLBACK = () =>
    window.history.replaceState({}, document.title, window.location.pathname);

export const Auth0Context = React.createContext<Auth0Context | null>(null);

export const useAuth0 = () => useContext(Auth0Context)!;

export const Auth0Provider = ({
    children,
    onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
    ...options
}: Auth0ProviderOptions & Auth0ClientOptions) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [auth0Client, setAuth0] = useState<Auth0Client>();
    const [popupOpen, setPopupOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    useEffect(() => {
        const initAuth0 = async () => {
            const auth0FromHook = await createAuth0Client(options);
            setAuth0(auth0FromHook);
            if (window.location.search.includes("code=")) {
                const { appState } = await auth0FromHook.handleRedirectCallback();
                onRedirectCallback(appState);
            }
            const isAuthenticated = await auth0FromHook.isAuthenticated();

            setIsAuthenticated(isAuthenticated);

            if (isAuthenticated) {
                const user = await auth0FromHook.getUser();
                setUser(user);
            }

            setLoading(false);
        };
        initAuth0();
        // eslint-disable-next-line
    }, []);

    const handleRedirectCallback = async () => {
        setLoading(true);
        const result = await auth0Client!.handleRedirectCallback();
        const user = await auth0Client!.getUser();
        setLoading(false);
        setIsAuthenticated(true);
        setUser(user);
        return result;
    };

    const loginWithPopup = async (o: PopupLoginOptions) => {
        setPopupOpen(true);
        try {
            await auth0Client!.loginWithPopup(o);
        } catch (error) {
            console.error(error);
        } finally {
            setPopupOpen(false);
        }
        const user = await auth0Client!.getUser();
        setUser(user);
        setIsAuthenticated(true);
    };
    return (
        <Auth0Context.Provider value={{
            isAuthenticated,
            user,
            loading,
            popupOpen,
            loginWithPopup,
            handleRedirectCallback,
            getIdTokenClaims: (o: getIdTokenClaimsOptions | undefined) =>
                auth0Client!.getIdTokenClaims(o),
            loginWithRedirect: (o: RedirectLoginOptions) =>
                auth0Client!.loginWithRedirect(o),
            getTokenSilently: (o: GetTokenSilentlyOptions | undefined) =>
                auth0Client!.getTokenSilently(o),
            getTokenWithPopup: (o: GetTokenWithPopupOptions | undefined) =>
                auth0Client!.getTokenWithPopup(o),
            logout: (o: LogoutOptions | undefined) => auth0Client!.logout(o)
        }}>
            {children}
        </Auth0Context.Provider>
    );
};