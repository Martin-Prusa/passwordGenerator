import {Dispatch, SetStateAction, useContext} from "react";
import {PasswordGeneratorContext} from "@/passwordGenerator/PasswordGeneratorContext";

export const ActiveOptions = ({setOptionsSetting}: {setOptionsSetting: Dispatch<SetStateAction<boolean>>}) => {
    const {state, dispatch} = useContext(PasswordGeneratorContext)

    const handleEdit = () => {
        setOptionsSetting(true)
    }

    const handleGenerate = () => {
        dispatch({type: 'generate'})
    }

    return (
        <div className="ml-5 my-5">
            <ul className="flex flex-col gap-3">
                <li>Length: {state.length}</li>
                <li>Numbers: {state.includeNumbers ? 'Yes' : 'No'}</li>
                <li>Symbols: {state.includeSymbols ? 'Yes' : 'No'}</li>
                <li>Uppercase: {state.includeUppercase ? 'Yes' : 'No'}</li>
            </ul>
            <button
                onClick={handleEdit}
                className="bg-yellow-300 w-32 mr-5 p-2 rounded-3xl"
            >Edit</button>
            <button onClick={handleGenerate} className="bg-green-600 text-white w-32 mt-5 p-2 rounded-3xl">Generate</button>
        </div>
    )
}