import React, {ReactNode, useReducer} from "react";
import {passwordGeneratorReducer} from "@/passwordGenerator/passwordGeneratorReducer";
import {initialState, PasswordGeneratorContext} from "@/passwordGenerator/PasswordGeneratorContext";

export function PasswordGeneratorProvider({children}: {children: ReactNode}) {
    const [state, dispatch] = useReducer(passwordGeneratorReducer, initialState);

    return (
        <PasswordGeneratorContext.Provider value={{state, dispatch}}>
            {children}
        </PasswordGeneratorContext.Provider>
    )
}