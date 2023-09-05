import React, { useContext, useEffect, useState } from 'react';
import styles from './Header.module.css';
import cartSvg from '../../assets/images/cart.svg';
import ModalAppearContext from '../../context/ModalAppearContext';
import OrderModalContext from '../../context/OrderModalContext';


const Header = React.memo(() => {
    const modalAppearCtx = useContext(ModalAppearContext);
    const OrderModalCtx = useContext(OrderModalContext);

    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

    const btnClasses = `${styles['cart-button']} ${buttonIsHighlighted ? styles['bump'] : ''}`

    const orderedItems = OrderModalCtx.orderedItems;

    const modalAppearHandler = () => {
        modalAppearCtx.setAppear(true);
    }

    useEffect(() => {
        if(orderedItems.length == 0) return;
        setButtonIsHighlighted(true);
        
        const timer = setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 300)

        return () => {clearTimeout(timer)}
    }, [orderedItems])

    return (
        <header className={`${styles['header']}`} id='abc'>
            <div className={`${styles['logo']}`}>
            ReactMeals
            </div>
            <button className={btnClasses} id='cart-button'
                onClick={modalAppearHandler}
                >
                <img className={`${styles['cart-icon']}`} src={cartSvg}/>
                <p className={`${styles['cart-label']}`}>Your Cart</p>
                <div className={`${styles['cart-item-counts']}`}>{orderedItems.length}</div>
            </button>
        </header>
    )
});

export default Header