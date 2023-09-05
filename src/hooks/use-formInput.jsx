import React, { useState } from "react";

const useFormInput = (validityFunction) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    let IsValid = validityFunction(enteredValue);
    
    const hasError = !IsValid && isTouched;
    const inputChangeHandler = (e) => {
        setEnteredValue(e.target.value);
    }
    const inputBlurHandler = () => {
        setIsTouched(true);
    }

    return {
        enteredValue,
        hasError,
        IsValid,
        inputChangeHandler,
        inputBlurHandler
    }
}

export default useFormInput;