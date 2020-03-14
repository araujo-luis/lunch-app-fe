import React, { useContext } from "react";

export const Auth0Context = React.createContext("contect");
export const useAuth0 = () => useContext(Auth0Context)!;
export const Auth0Provider = (props: any) => {

    return (
        <Auth0Context.Provider value={""}>
            {props.children}
        </Auth0Context.Provider>
    );
};