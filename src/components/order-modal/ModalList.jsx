import React, {useContext, useState} from 'react';
import ModalListItem from './ModalListItem';
import OrderModalContext from '../../context/OrderModalContext';
import ModalAppearContext from '../../context/ModalAppearContext';
import styles from './OrderModal.module.css';
import ModalLastItem from './ModalLastItem';
 
const ModalList = () => {

    const OrderModalCtx = useContext(OrderModalContext);
    const ModalAppearCtx = useContext(ModalAppearContext);

    const modalAppearHandler = () => {
        ModalAppearCtx.setAppear(false);
    }
    const orderdItemList = OrderModalCtx.orderedItems.map((orderItem) => (
        <ModalListItem key = {orderItem.id} orderItem = {orderItem}
        />))
    return (
        <article className={`${styles['order-modal']}`} id='order-modal'>
            {
                OrderModalCtx.orderedItems.length 
                ?
                
                (<ul className={`${styles['modal__food-list']}`}
                > {orderdItemList} </ul>) 

                : (<p>No Items Available</p>)
            
            }
                
                <ModalLastItem 
                    onClose = {modalAppearHandler}
                    totalAmount = {OrderModalCtx.totalAmount} 
                    appear = {OrderModalCtx.orderedItems.length}
                />
        </article>
    )
}

export default ModalList