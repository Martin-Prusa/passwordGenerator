import {Action, PasswordState} from "@/passwordGenerator/types";


const characters = {
    symbols: '+@#$~&*-_><?!'
}
const generatePassword = (options: PasswordState): string => {
    let lowerCount = options.length

    const numbersCount = options.includeNumbers ? Math.ceil(Math.random() * (options.length / 4)) : 0
    lowerCount -= numbersCount

    const symbolsCount = options.includeSymbols ? Math.ceil(Math.random() * (options.length / 4)) : 0
    lowerCount -= symbolsCount

    const upperCount = options.includeUppercase ? Math.ceil(Math.random() * (options.length / 4)) : 0
    lowerCount -= upperCount

    let generatedPassword = []

    for (let i = 0; i < numbersCount; i++) {
        generatedPassword.push(Math.floor(Math.random()*10))
    }
    for (let i = 0; i < symbolsCount; i++) {
        generatedPassword.push(characters.symbols.at(Math.floor(Math.random()*characters.symbols.length)))
    }
    for (let i = 0; i < upperCount; i++) {
        generatedPassword.push(String.fromCharCode(Math.floor(Math.random()*(90-65))+65))
    }
    for (let i = 0; i < lowerCount; i++) {
        generatedPassword.push(String.fromCharCode(Math.floor(Math.random()*(122-97))+97))
    }


    return generatedPassword
        .map((value) => ({value, rand: Math.random()}))
        .sort((i,j) => i.rand - j.rand)
        .map(i => (i.value))
        .join('')
}

export const passwordGeneratorReducer = (state: PasswordState, action: Action): PasswordState => {
    switch (action.type) {
        case "setOptions":
            return {
                ...state,
                ...action.options
            }
        case "generate":
            return {
                ...state,
                value: generatePassword(state)
            }
        default:
            return state
    }
}