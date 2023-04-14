import {ContextType, PasswordState} from "@/passwordGenerator/types";
import {createContext} from "react";

export const initialState: PasswordState = {
    value: '',
    length: 10,
    includeUppercase: true,
    includeNumbers: true,
    includeSymbols: true,
};

export const PasswordGeneratorContext = createContext<ContextType>({
    state: initialState,
    dispatch: () => {}
})