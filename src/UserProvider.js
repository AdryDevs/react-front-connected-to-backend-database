import React, { useState, useContext } from "react";

const userContext = React.createContext();
const userToggleContext = React.createContext();

export function useUserContext() {
    return useContext(userContext);
}

export function useUserToggleContext() {
    return useContext(userToggleContext);
}

export function UserProvider({ children }) {
    const [user, setUser] = useState({
        name: 'User',
        isAdmin: false,
        cliecked:{}
    });

    const changeLogin = (name, admin) => {
        setUser({
            name: name,
            isAdmin: admin
        });
    }

    return (
        <userContext.Provider value={user}>
            <userToggleContext.Provider value={changeLogin}>
                {children}
            </userToggleContext.Provider>
        </userContext.Provider>
    );
}