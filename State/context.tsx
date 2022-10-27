import React, { createContext, useReducer } from "react";
import { ProductType, initialStateType } from "./types";
import { combinedReducer } from "./combinedReducer";


export const initialState: initialStateType = {
    products: Array(10).fill({ name: "Checkered shirt", price: 500, amount: 7 }),
    totalVisible: false,
}



export const Context = createContext<{ state: initialStateType, dispatch: React.Dispatch<any> }>({ state: initialState, dispatch: () => null })



export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(combinedReducer, initialState)
    return <Context.Provider value={{ state, dispatch }}>
        {children}
    </Context.Provider>
}