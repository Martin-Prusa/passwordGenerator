import {PasswordGeneratorContext} from "@/passwordGenerator/PasswordGeneratorContext";
import {PasswordGeneratorProvider} from "@/passwordGenerator/PasswordGeneratorProvider/PasswordGeneratorProvider";
import {ResultPassword} from "@/components/UI/ResultPassword";
import {ActiveOptions} from "@/components/UI/ActiveOptions";
import {useContext, useState} from "react";
import {GeneratorOptions} from "@/components/UI/GeneratorOptions";

export default function Home() {

    const [optionsSetting, setOptionsSetting] = useState(false)

    return (
        <main className="container mx-auto">
            <h1 className="text-4xl font-bold text-center m-5">Password generator</h1>
            <PasswordGeneratorProvider>
                <div className="mt-10">
                    <h2 className="text-xl font-bold">Password Options</h2>
                    {optionsSetting ? <GeneratorOptions setOptionsSetting={setOptionsSetting} /> : <ActiveOptions setOptionsSetting={setOptionsSetting}/>}
                </div>

                <ResultPassword/>
            </PasswordGeneratorProvider>
        </main>
    )
}
