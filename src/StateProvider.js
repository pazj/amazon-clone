import React, {createContext, useContext,
useReducer } from "react"

//this prepares the dataLayer
export const StateContext = createContext();

//This wrap our app and provide the dataLayer
export const StateProvider = ({ reducer,
initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer,
        initialState)}>
            {children}
        </StateContext.Provider>
);

//pull information from the data layer
export const useStateValue = () => useContext
(StateContext)