import React from 'react';
import ReactDOM from 'react-dom';
import styles from './OrderModal.module.css';
import ModalList from './ModalList';

const OrderModal = () => {
   


    /**
     * ! This is a ** mistake ** and was causing slideDown being
     * ! Triggered Again and Again because the function is 
     * ! called at every render
     */
    // const ModalOverlay = () => {
            
    //     return <ModalList /> ;
    // }

    const ModalBackdrop = () => {
        return <div className={`${styles['modal-overlay']}`} />
    }

    return (
       <>
            {
                ReactDOM.createPortal(<ModalBackdrop />, document.getElementById('backdrop-root'))
            }
            {
                ReactDOM.createPortal(<ModalList />, document.getElementById('overlay-root'))
            }
       </>
    )
}

export default OrderModal