import React, { useEffect, useState } from 'react'
import FoodListItem from './FoodListItem';
import styles from './FoodList.module.css';
import { getFoodItems, postFoodItems } from '../../api/api';
const FoodList = (props) => {

    const [foodItemsArray, setFoodItemsArray] = useState([]);
    const [foodAmount, setFoodAmount] = useState({'m1': 1, 'm2': 1, 'm3': 1, 'm4': 1});        
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState('');
    useEffect(() => {

        const getFoodItemsHandler = async () => {
            const data = await getFoodItems(setHttpError, setIsLoading);
            setFoodItemsArray(data);
        }
        getFoodItemsHandler();
    }, [])

    //   let foodAmountObj = 
    // {
    //     'm1': 1, 'm2': 1, 'm3': 1, 'm4': 1,
    // }
    useEffect(() => {
        console.log(foodItemsArray);
        let foodAmountObj = {};
        if(foodItemsArray.length > 0) {
            for(let i = 0; i < foodItemsArray.length; ++i) {
                foodAmountObj[foodItemsArray[i]['id']] = 1
            }
            setFoodAmount(foodAmountObj)
        }
    }, [foodItemsArray])

    // let foodAmountObj = 
    // {
    //     'm1': 1, 'm2': 1, 'm3': 1, 'm4': 1,
    // }

    //     const foodItemsArray = [
    //     {
    //         id: 'f1',
    //         name: 'Sushi',
    //         info: 'Finest Fish and Veggies',
    //         price: 22.99,
    //     },
    //     {
    //         id: 'f2',
    //         name: 'Shinetzel',
    //         info: 'A German Speacialty!',
    //         price: 16.50,
    //     },
    //     {
    //         id: 'f3',
    //         name: 'Barbecue Burger',
    //         info: 'American, Raw, Meaty',
    //         price: 12.99,
    //     },
    //     {
    //         id: 'f4',
    //         name: 'Green.. Bowl',
    //         info: 'Healthy and Green',
    //         price: 18.99,
    //     }
    // ] 
    // const foodAmountObj = 
    //     {
    //         'm1': 1, 'm2': 1, 'm3': 1, 'm4': 1,
    //     }
    // const [foodAmount, setFoodAmount] = useState(foodAmountObj);

    
    const onAddFood = (cartItem) => {
        
        props.AddtoCartHandler(cartItem);
    }
    const contents = (foodItemsArray?.map((foodObj) => (
         <FoodListItem key = {foodObj.id}
             foodObj = {foodObj}
             foodAmount = {foodAmount}
             setFoodAmount = {setFoodAmount}
             onAddFood = {onAddFood}
             isLoading = {isLoading}
         />
     )))
    return (
        <article className={`${styles['food-list-container']}`}>
            <ul className={`${styles['food-list']}`}>
            {
                (httpError && <p>{httpError}</p>) ||
                (isLoading && <p>Loading..</p>)   ||
                (contents)
            }   
            </ul>
        </article>
    )
}

export default FoodList