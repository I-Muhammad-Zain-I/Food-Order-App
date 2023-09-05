const API_URL = "https://food-order-app-49e0a-default-rtdb.firebaseio.com/meals.json";
const getFoodItems = async (setHttpError, setIsLoading) => {
    setIsLoading(true)
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Request Failed..!")
        }
        const data = await response.json();
        const loadedMeals = [];
        for(const key in data) {
            loadedMeals.push({
                id: key,
                name: data[key].name,
                info: data[key].info,
                price: data[key].price
            });
        }
        setIsLoading(false);
        return loadedMeals;
    } catch (error) {
        console.log(error);
        setIsLoading(false);
        setHttpError(error.message);
        return [];
    } finally {
        console.log("getFoodItems Finished Executing..!");
    }
    
};

export {getFoodItems};


const postFoodItems = async (data) => {
    try {
        await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.log(error);
    } finally {
        console.log("postFoodItems Finished Executing..!");
    }
}
export {postFoodItems}


const postUserOrders = async (userData, orderedItems) => {
    const API_URL = "https://food-order-app-49e0a-default-rtdb.firebaseio.com/orders.json"
    let response  = ''
    try {
        response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    
    }
    catch (error)  {
        console.log(error);
    } finally {
        console.log("postUserOrders Finished Executing..!");
        return response.status;
    }
}
export {postUserOrders}