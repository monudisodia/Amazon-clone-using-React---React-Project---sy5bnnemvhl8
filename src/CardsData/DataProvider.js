import { createContext, useContext } from "react";
import { useReducer } from "react";

export const dataContext= createContext();
 

export const DataProvider =({reducer,initialData,children})=>{
    return (
        <dataContext.Provider value={{myReducer:useReducer(reducer,initialData), initialData}}>
            {children}
        </dataContext.Provider>
    )
}

export const useDataValue=()=> useContext(dataContext);