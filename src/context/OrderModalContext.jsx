import React, { useReducer, useState } from 'react'

    const defaultOrderState = {
        orderedItems: [],
        totalAmount: 0
    }
    const OrderModalContext = React.createContext({
        orderedItems: defaultOrderState.orderedItems,
        totalAmount: defaultOrderState.totalAmount,
        AddOrderToCart: () => {},
        AddOrderAmount: () => {},
        SubtractOrderAmount: () => {},
    });

    const isPresent = (items, orderedItems) => {
        let filterAns = orderedItems.filter((item) => item.id === items.id);
        
        if(filterAns.length !== 0 ) return true
        else return false
    }

    const orderModalReducer = (state, action) => {

        let newOrderItemList = [];
        let newtotalAmount = 0;

        switch(action.type) {
            case 'ADD_ORDER_ITEM':
                if(isPresent(action.cartItem, state.orderedItems)) {
                    newOrderItemList = state.orderedItems.map((item) => (
                        ((item.id === action.cartItem.id) ? ({...item, amount: item.amount + action.cartItem.amount }) : (item))))
                } 
                else newOrderItemList = [...state.orderedItems, action.cartItem];
                
                break;

            case 'ADD_AMOUNT': 
                newOrderItemList = (state.orderedItems.map((item) => (
                    (item.id === action.id) ? ({...item, amount: item.amount + 1}) : (item))
                ));
                break;    

            case 'SUB_AMOUNT':
                newOrderItemList = (state.orderedItems.map((item) => (
                    (item.id === action.id) ? ((item.amount - 1 > 0 ? {...item, amount: item.amount - 1} : null)) : item
                    ))
                ).filter((item) => item !== null)
                break;    
        }
        console.log('New Order Item');
        console.log(newOrderItemList);
        newtotalAmount = newOrderItemList.reduce((acc,item) => (acc + item.amount * item.price), 0)
        console.log(`New Total Amount: ${newtotalAmount}`)
        return {...state,orderedItems: newOrderItemList,totalAmount: newtotalAmount?.toFixed(2)};
    }


    export const OrderModalContextProvider = (props) => {
        const [orderState, orderDispatch] = useReducer(orderModalReducer, defaultOrderState);


        const AddOrderToCart = (cartItem) => {
            orderDispatch({type: 'ADD_ORDER_ITEM', cartItem: cartItem})
        }
        const AddOrderAmount = (id) => {
            orderDispatch({type: 'ADD_AMOUNT', id: id})
        }
        const SubtractOrderAmount = (id) => {
            orderDispatch({type: 'SUB_AMOUNT', id: id})
        }

        return (
            <OrderModalContext.Provider
                value={{ orderedItems: orderState.orderedItems,
                        totalAmount: orderState.totalAmount,
                        AddOrderToCart, AddOrderAmount, SubtractOrderAmount}}
            >
                {props.children}
            </OrderModalContext.Provider>
        );
    }

export default OrderModalContext;