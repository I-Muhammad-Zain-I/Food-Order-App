import React, {useContext, useEffect} from 'react';
import styles from './OrderModal.module.css';
import OrderModalContext from '../../context/OrderModalContext';


const ModalListItem = (props) => {
    const orderModalCtx = useContext(OrderModalContext);

    const subFoodAmount = (id) => {
        orderModalCtx.SubtractOrderAmount(id);
    }
    const addFoodAmount = (id) => {
       orderModalCtx.AddOrderAmount(id)
    }
 
    
    return (
        <li
         className={`${styles['modal-list-item']}`}>
            <div className={`${styles['modal-list-left']}`}>
                <h2 className={`${styles['modal-left__title']}`}>{props.orderItem.name}</h2>
                <div className={`${styles['modal-left__price-quantity']}`}>
                    <p className={`${styles['modal-left__price']}`}>{props.orderItem.price}</p>
                    <p className={`${styles['modal-left__quantity']}`}>x {props.orderItem.amount}</p>
                </div>
            </div>
            {<div className={`${styles['modal-list-right']}`}>
                <button onClick={() => subFoodAmount(props.orderItem.id)} 
                    className={`${styles['list-btn']}`}>-</button>
                <button onClick={() => addFoodAmount(props.orderItem.id)}
                className={`${styles['list-btn']}`}>+</button>
            </div>}
        </li>
    )
}

export default ModalListItem