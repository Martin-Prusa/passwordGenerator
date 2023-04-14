import React from "react";

export type PasswordState = {
    value: string
    length: number
    includeUppercase: boolean
    includeNumbers: boolean
    includeSymbols: boolean
}

export type Action =
    | {type: 'setOptions', options: PasswordState}
    | {type: 'generate'}

export type ContextType = {
    state: PasswordState;
    dispatch: React.Dispatch<Action>;
}