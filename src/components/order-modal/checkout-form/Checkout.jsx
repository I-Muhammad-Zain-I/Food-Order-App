import { useRef, useState } from 'react';
import classes from './Checkout.module.css';
import Input from './Input';
import useFormInput from '../../../hooks/use-formInput';
import { postUserOrders } from '../../../api/api';

const isNotEmpty = (value) => value.trim() !== '';
const isFiveChars = (value) => (value.trim().length === 5 && isNotEmpty(value));

const Checkout = (props) => {
    // const [confirmDisabled, setConfirmDisabled] = useState(false);
    // const [afterReqMsg, setAfterReqMsg] = useState('');

    const {
        enteredValue: enteredName,
        hasError: nameHasError,
        IsValid: nameIsValid,
        inputChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler

} = useFormInput(isNotEmpty)
const {
        enteredValue: enteredStreet,
        hasError: streetHasError,
        IsValid: streetIsValid,
        inputChangeHandler: streetChangeHandler,
        inputBlurHandler: streetBlurHandler

} = useFormInput(isNotEmpty)
const {
        enteredValue: enteredPostalCode,
        hasError: postalCodeHasError,
        IsValid: postalCodeIsValid,
        inputChangeHandler: postalCodeChangeHandler,
        inputBlurHandler: postalCodeBlurHandler

} = useFormInput(isFiveChars)
const {
        enteredValue: enteredCity,
        hasError: cityHasError,
        IsValid: cityIsValid,
        inputChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler

} = useFormInput(isNotEmpty)

    
    const formIsValid = nameIsValid && streetIsValid
    && cityIsValid && postalCodeIsValid;

  const confirmHandler = (event) => {
    event.preventDefault();

    if(!formIsValid) {
        
        return;
    }

    // setConfirmDisabled(true);

    let userData = {
        name: enteredName,
        street: enteredStreet,
        postalCode: enteredPostalCode,
        city: enteredCity,
    }


    props.onConfirm(userData)
 
        


    // Submit Cart Data
   
    

  };
  const cancelFormHandler = () => {
    props.onCancel();
  }

 


    let confirmIsDisabled = !props.appear  && !formIsValid;
    const confirmBtnClasses = (confirmIsDisabled) ? `${classes.disabled}` : `${classes.submit}`;

    const nameControlClasses = nameHasError ? `${classes.control} ${classes.invalid}` : `${classes.control}`
    const streetControlClasses = streetHasError ? `${classes.control} ${classes.invalid}` : `${classes.control}`
    const postalControlClasses = postalCodeHasError ? `${classes.control} ${classes.invalid}` : `${classes.control}`
    const cityControlClasses = cityHasError ? `${classes.control} ${classes.invalid}` : `${classes.control}`
    

  return (

    <form className={classes.form} onSubmit={confirmHandler}>
        {props.afterReqMsg && <p>{props.afterReqMsg}</p>}
        <div className={nameControlClasses}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name'
                    value={enteredName} onChange={(e) => nameChangeHandler(e)}
                    onBlur={nameBlurHandler}
            />
            {nameHasError && <p>Please Enter a Valid Name!</p>}
        </div>
        <div className={streetControlClasses}>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' 
                value={enteredStreet} onChange={(e) => streetChangeHandler(e)}
                onBlur={streetBlurHandler}
            />
            {streetHasError && <p>Please Enter a Valid Street!</p>}
        </div>
        <div className={postalControlClasses}>
            <label htmlFor='postal'>Postal Code</label>
            <input type='text' id='postal' 
                value={enteredPostalCode} onChange={(e) => postalCodeChangeHandler(e)}
                onBlur={postalCodeBlurHandler}
            />
            {postalCodeHasError && <p>Please Enter a Valid Postal Code!</p>}
        </div>
        <div className={cityControlClasses}>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' 
                value={enteredCity} onChange={(e) => cityChangeHandler(e)}
                onBlur={cityBlurHandler}
            />
            {cityHasError && <p>Please Enter a Valid City!</p>}
        </div>
      <div className={classes.actions}>
        <button type='button' onClick={cancelFormHandler}>
          Cancel
        </button>
        <button type='submit' className={confirmBtnClasses} disabled = {confirmIsDisabled} >Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;

