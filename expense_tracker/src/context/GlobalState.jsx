import React, {createContext, useReducer}  from "react";
import AppReducer from './AppReducer'

const initialState = {
    transactions: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispacth] = useReducer(AppReducer, initialState);

    function deleteTransaction(id){
        dispacth({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(transaction){
        dispacth({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    
    
    
    return (<GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
        {children}
    </GlobalContext.Provider>)
}