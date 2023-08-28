import React, { useState } from 'react'
import FoodListItem from './FoodListItem';
import styles from './FoodList.module.css';
const FoodList = (props) => {

        const foodItemsArray = [
        {
            id: 'f1',
            name: 'Sushi',
            info: 'Finest Fish and Veggies',
            price: 22.99,
        },
        {
            id: 'f2',
            name: 'Shinetzel',
            info: 'A German Speacialty!',
            price: 16.50,
        },
        {
            id: 'f3',
            name: 'Barbecue Burger',
            info: 'American, Raw, Meaty',
            price: 12.99,
        },
        {
            id: 'f4',
            name: 'Green.. Bowl',
            info: 'Healthy and Green',
            price: 18.99,
        }
    ] 
    const foodAmountObj = 
        {
            'f1': 1, 'f2': 1, 'f3': 1, 'f4': 1,
        }
    const [foodAmount, setFoodAmount] = useState(foodAmountObj);


    const onAddFood = (cartItem) => {

        props.AddtoCartHandler(cartItem);
    }
    return (
        <article className={`${styles['food-list-container']}`}>
            <ul className={`${styles['food-list']}`}>
                {
                    foodItemsArray.map((foodObj) => (
                        <FoodListItem key = {foodObj.id}
                            foodObj = {foodObj}
                            foodAmount = {foodAmount}
                            setFoodAmount = {setFoodAmount}
                            onAddFood = {onAddFood}
                        />
                    ))
                }
            </ul>
        </article>
    )
}

export default FoodList