import { useContext, useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header';
import InfoBoard from './components/info-board/InfoBoard';
import FoodList from './components/food-list/FoodList';
import OrderModal from './components/order-modal/OrderModal';
import OrderModalContext from './context/OrderModalContext';
import ModalAppearContext from './context/ModalAppearContext';
import BackgroundImage from './components/background-img/BackgroundImage';

function App() {
    
    const [cartItems, setCartItems] = useState([]);
    const OrderModalCtx = useContext(OrderModalContext);
    const ModalAppearCtx = useContext(ModalAppearContext);

    // const isPresent = (items) => {
    //     let filterAns = cartItems.filter((item) => item.id === items.id);
        
    //     if(filterAns.length == 0 ) return false
    //     else return true
    // }


    // const AddtoCartHandler = (cartItem) => {

    //     if(cartItems.length == 0) {
    //         OrderModalCtx.setOrderedItems(() => [...OrderModalCtx.orderedItems, cartItem])
    //         return;
    //     }
    //     else if(isPresent(cartItem)) {
    //         OrderModalCtx.setOrderedItems(() => (
    //             OrderModalCtx.orderedItems.map((item) => (
    //                 ((item.id === cartItem.id) ? (cartItem) : (item))
    //              ))
    //         ))
    //     } else {
    //         console.log('Else Run');
    //         OrderModalCtx.setOrderedItems(() => [...OrderModalCtx.orderedItems, cartItem])
    //     }

        // let check = false;
        // setCartItems(() => 
        //            { 
        //             cartItems.map((item, index) => {
                    
        //             if(cartItem.id === item.id) {
        //                 return {id:item.id,name: item.name, amount: cartItem.amount}
        //             }
        //             else {
        //                 if(index === cartItems.length - 1) {check = true;}
        //                 return item;
        //             }
        //         })}
                
        //     )
        // if(check) {
        //     check = false;
        //     setCartItems(() => [...cartItems, cartItem])
        // }
        // ([
        
        //         cartItems.map((item) => (
        //            ((cartItem.id === item.id) ? ({id:item.id,name: item.name, amount: cartItem.amount}) : (item))
        //         ))
        //         ]))
                
            
    // };
    
    const AddtoCartHandler = (cartItem) => {
        OrderModalCtx.AddToCart(cartItem);
    }

    useEffect(() => {
        console.log(OrderModalCtx.orderedItems);
    }, [OrderModalCtx.orderedItems])

    return (
        <BackgroundImage>
            <Header orderItemCount = {OrderModalCtx.orderedItems.length}/>
            <main>
                <InfoBoard />
                <FoodList AddtoCartHandler = {AddtoCartHandler}/>
            </main>
            {ModalAppearCtx.appear && <OrderModal />}
        </BackgroundImage>
    )
}

export default App;
