import React from 'react';
import styles from './OrderModal.module.css';
const ModalLastItem = (props) => {



    const modalCloseHandler = () => {
        props.onClose();
    }
    const orderHandler = () => {
        props.onOrder(true);
    }
  return (
    <div className={`${styles['modal__food-list__last-item']}`}>
        <div className={`${styles['total-amount']}`}>
            <p>Total Amount</p>
            <p>$ {props.totalAmount}</p>
        </div>
        {(props.checkoutAppear && Boolean(props.totalAmount)) ||
        <div className={`${styles['modal-actions']}`}>
            <button onClick={modalCloseHandler}
      
            className={`${styles['modal-closeBtn']} ${styles['modal-btn']}`} >Close</button>
            {   props.appear 
                ? 
                (<button 
                    className={`${styles['modal-orderBtn']} ${styles['modal-btn']}`}
                    onClick = {orderHandler}
                    >Order</button>)
                :
                null
            }
        </div> }
    </div>
  )
}
 
export default ModalLastItem