import React, { useContext } from 'react';
import styles from './FoodList.module.css';
import OrderModalContext from '../../context/OrderModalContext';
const FoodListItem = (props) => {

    const OrderModalCtx = useContext(OrderModalContext);

    const foodAmountChangeHandler = (e) => {
       
        if(e.target.value > 0) {
            props.setFoodAmount(() => (
                {...(props.foodAmount),[props.foodObj['id']]: +(e.target.value)  }
            ))
        }
    }

    const addFoodHandler = () => {
        const cartItem = {

            id: props.foodObj['id'],
            name: props.foodObj['name'],
            price: props.foodObj['price'],
            amount : props.foodAmount[props.foodObj['id']],
        }
        OrderModalCtx.AddOrderToCart(cartItem)
    }
    return (

        <li className={`${styles['food-list-item']}`}  id= {props.foodObj['id']}>
            <div className={`${styles['food-list-info']}`}>
                <h3 className={`${styles['food-item__name']}`}>{props.foodObj['name']}</h3>
                <p className={`${styles['food-item__info']}`}><em>{props.foodObj['info']}</em></p>
                <h3 className={`${styles['food-item__price']}`}>${props.foodObj['price']}</h3>
            </div>

            <div className={`${styles['food-list-amount']}`}>
                <div className={`${styles['amount__container']}`}>
                    <label htmlFor={props.foodObj['id']}>Amount</label>
                    <input id={props.foodObj['id']}
                    className={`${styles['amount__input']}`}
                    type='number' value={props.foodAmount[props.foodObj['id']]}
                    onChange={(e) => foodAmountChangeHandler(e)}

                />
                </div>
                <button className={`${styles['amount__addbtn']}`}
                    onClick={addFoodHandler}>
                    +Add
                </button>
            </div>
        </li>
    )
}

export default FoodListItem;