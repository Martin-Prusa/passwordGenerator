import {useContext} from "react";
import {PasswordGeneratorContext} from "@/passwordGenerator/PasswordGeneratorContext";

export const ResultPassword = () => {
    const {state, dispatch} = useContext(PasswordGeneratorContext)

    return (
            (state.value.trim() !== '') ? <div className="bg-green-100 p-5 rounded-3xl">
                <div className="text-3xl text-center mb-3">Your New Password</div>
                <div className="my-5 text-center">{state.value}</div>
            </div> : null
    )
}