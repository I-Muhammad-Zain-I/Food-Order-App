import React, { useState, useContext, useEffect } from 'react'
import useFormInput from '../../../hooks/use-formInput'
import classes from './Checkout.module.css';
import ValidityContext from '../../../context/ValidityContext';
const Input = (props) => {
    

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const [hasError, setHasError] = useState(false);

    let val = props.validityFunction(enteredValue);
    setHasError(!val && isTouched)
    props.setIsValid(val);
    // const hasError = !val && isTouched;

    // useEffect(() => {
    //     props.setIsValid(val);
    // }, [hasError])
   

    const inputChangeHandler = (e) => {
        setEnteredValue(e.target.value);
    }
    const inputBlurHandler = () => {
        setIsTouched(true);
    }
















    // const [enteredValue, setEnteredValue] = useState('');
    // const [isTouched, setIsTouched] = useState('');

    // const formValidityCtx = useContext(ValidityContext);

    // let inputIsValid = props.validityFunction(enteredValue);
    // formValidityCtx.setFormValidity((prevState) => ({...prevState, name: inputIsValid}));
    // const hasError = !inputIsValid && isTouched;

    // const {
    //         enteredValue,
    //         hasError,
    //         setEnteredValue,
    //         setIsTouched,
    //         inputChangeHandler,
    //         inputBlurHandler

    // } = useFormInput(   props.validityFunction, 
    //                     props.isValid, 
    //                     props.setIsValid
    //                 )

    // const inputChangeHandler = (e) => {
    //     setEnteredValue(e.target.value);
    // }
    // const inputBlurHandler = () => {
    //     setIsTouched(true);
    // }

    const inputClasses = !hasError ? `${classes.control}` : `${classes.control} ${classes.invalid}`

    return (

        <div className={inputClasses}>
            <label htmlFor={props.label}>{props.label}</label>
            <input
                id={props.label} 
                onChange={(e) => inputChangeHandler(e)} 
                onBlur={inputBlurHandler}
                value={enteredValue} 
                type='text' />
            {hasError && <p>Please Enter Valid {props.label}!</p>}
        </div>
    )
}

export default Input