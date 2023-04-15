import {Action, PasswordState} from "@/passwordGenerator/types";

export const passwordGeneratorReducer = (state: PasswordState, action: Action): PasswordState => {
    switch (action.type) {
        case "setOptions":
            return {
                ...state,
                ...action.options
            }
        case "generate":
            console.log(state)
            return {
                ...state,
                value: 'heslo'
            }
        default:
            return state
    }
}