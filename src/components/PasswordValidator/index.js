// Write your code here
import { useState } from "react";

import {
  CompleteValidatorContainer,
  InsideValidateContainer,
  ValidateHeading,
  ValidatorParagraph,
  InputPasswordContainer,
  PasswordErrorMsg,
} from './styledComponents'

const PasswordValidator = () =>{
    const [userInput,setUserInput] =useState("")
    const [isError, setisError] = useState(true)

    const passwordValidator = event =>{
        const userinputLength= userInput.length
        if (userinputLength < 8) {
            setisError(true)
            setUserInput(event.target.value)
        } else {
            setisError(false)
            setUserInput(event.target.value)
        }
    }

    return (
        <div>
            <CompleteValidatorContainer>
                <InsideValidateContainer>
                    <ValidateHeading>Password Validator</ValidateHeading>
                    <ValidatorParagraph>check how strong and secure is your password</ValidatorParagraph>
                    <InputPasswordContainer 
                        onChange= {passwordValidator}
                        type="password"
                        userInput={userInput}
                    />
                    {isError && <PasswordErrorMsg>Your Password must be at least 8 characters</PasswordErrorMsg>}
                </InsideValidateContainer>
            </CompleteValidatorContainer>
        </div>
    )
}

export default PasswordValidator