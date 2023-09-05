import React, {useContext, useState} from 'react';
import ModalListItem from './ModalListItem';
import OrderModalContext from '../../context/OrderModalContext';
import ModalAppearContext from '../../context/ModalAppearContext';
import styles from './OrderModal.module.css';
import ModalLastItem from './ModalLastItem';
import Checkout from './checkout-form/Checkout';
import { postUserOrders } from '../../api/api';
import OrderSubmitMessage from './OrderSubmitMessage';

const ModalList = () => {

    const OrderModalCtx = useContext(OrderModalContext);
    const ModalAppearCtx = useContext(ModalAppearContext);
    
    const [checkoutAppear, setCheckoutAppear] = useState(false); 
    const [afterReqMsg, setAfterReqMsg] = useState({message: '', flag: true});

    const modalAppearHandler = () => {
        ModalAppearCtx.setAppear(false);
        setAfterReqMsg('');
    }

    const orderSubmitHandler = (userData) => {

        const postUserOrderHandler = async () => {
           const response =  await postUserOrders(userData, OrderModalCtx.orderedItems);
           if(response == 200) {
                setAfterReqMsg({message: "Order Completed Successfully", flag: true});
           } else {
                setAfterReqMsg({message: "Something went wrong, please try again later", flag: false});
           }
        //    setTimeout(() => ModalAppearCtx.setAppear(false),3000)
        }
        postUserOrderHandler();

    }

    const orderdItemList = OrderModalCtx.orderedItems.map((orderItem) => (
        <ModalListItem key = {orderItem.id} orderItem = {orderItem} checkoutAppear = {checkoutAppear}
        />))
    let messageDisplay = afterReqMsg.message;
    return (
   
        <article className={`${styles['order-modal']}`} id='order-modal'>
            { !afterReqMsg.message &&
                <>
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
                onOrder = {setCheckoutAppear}
                checkoutAppear = {checkoutAppear}
            />
            {checkoutAppear && <Checkout 
                onCancel={modalAppearHandler}
                appear = {OrderModalCtx.orderedItems.length}
                setAppear = {ModalAppearCtx.setAppear}
                onConfirm = {orderSubmitHandler}
                />}
            </>
            }
            
            {
                messageDisplay && <OrderSubmitMessage 
                                {...afterReqMsg}
                                setAfterReqMsg = {setAfterReqMsg}
                                setAppear = { ModalAppearCtx.setAppear}
                                />
            }       
        </article>
    )
}

export default ModalList