import {Dispatch, SetStateAction, useContext, useState} from "react";
import {PasswordGeneratorContext} from "@/passwordGenerator/PasswordGeneratorContext";

export const GeneratorOptions = ({setOptionsSetting}: {setOptionsSetting: Dispatch<SetStateAction<boolean>>}) => {

    const {state, dispatch} = useContext(PasswordGeneratorContext)

    const [oldOptions, setOldOptions] = useState(state)

    const handleSubmit = () => {
        dispatch({type: "setOptions", options: oldOptions})
        setOptionsSetting(false)
    }

    const setLength = (ln: number) => setOldOptions({...oldOptions, length: ln})
    const setNumbers = (n: boolean) => setOldOptions({...oldOptions, includeNumbers: n})
    const setSymbols = (s: boolean) => setOldOptions({...oldOptions, includeSymbols: s})
    const setUpper = (u: boolean) => setOldOptions({...oldOptions, includeUppercase: u})

    return (
        <div className="ml-5 my-5">
            <form onSubmit={handleSubmit}>
                <ul className="flex flex-col gap-3">

                    <li>
                        <label className="w-24 inline-block" htmlFor="length">Length:</label>
                        <input type="number" id="length"
                               value={oldOptions.length}
                               className="rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:border-0 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                               onChange={e => setLength(+e.target.value)}/>
                    </li>

                    <li>
                        <label className="w-24 inline-block" htmlFor="num">Numbers:</label>
                        <input type="checkbox" id="num" checked={oldOptions.includeNumbers} onChange={e => setNumbers(e.target.checked)}/>
                    </li>

                    <li>
                        <label className="w-24 inline-block" htmlFor="sym">Symbols:</label>
                        <input type="checkbox" id="sym" checked={oldOptions.includeSymbols} onChange={e => setSymbols(e.target.checked)}/>
                    </li>

                    <li>
                        <label className="w-24 inline-block" htmlFor="upp">Uppercase:</label>
                        <input type="checkbox" id="upp" checked={oldOptions.includeUppercase} onChange={e => setUpper(e.target.checked)}/>
                    </li>
                </ul>
                <button type="submit" className="bg-green-600 text-white w-32 mt-5 p-2 rounded-3xl">OK</button>
            </form>

        </div>
    )
}