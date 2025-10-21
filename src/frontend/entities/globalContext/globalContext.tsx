import React, { createContext, useReducer } from 'react';

const initialState = {};

const GlobalContext = createContext<unknown>(undefined);

export const GlobalProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [context, dispatch] = useReducer(appReducer, initialState);

    return (
        <GlobalContext.Provider value={{context, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}
