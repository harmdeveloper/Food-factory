 /* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider =(props) =>{

    const[cartItems,setCartItems]= useState({}); 
    const url =  "http://localhost:4000"
    const [token,setToken]= useState("")
    const [food_list,setFoodList]= useState([])



    const addToCart = async (itemId) =>{
        if (!cartItems[itemId]){
            // new entry for food product 
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            // increase the value by 1
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if (token){
            axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }


    const removeFromCart = async (itemId)=>{
         // decrease the value by 1
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if (token) {
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                let itemInfo = food_list.find((product) => product._id === itemId); // Ensure you're matching by _id
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[itemId];
                } else {
                    console.error(`Item with id ${itemId} not found in food_list`);
                }
            }
        }
        return totalAmount;
    };
    
//fetching fooditems
const fetchFoodList = async ()=>{
    const response = await axios.get(url+"/api/food/list");
    setFoodList(response.data.data)
}

const loadCartData= async(token)=>{
    const  response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
    setCartItems(response.data.cartData);
}

useEffect(()=>{
     async function loadData() {
        await fetchFoodList();
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
            await loadCartData(localStorage.getItem("token"));
        }
    }
    loadData();
},[])

//to access in any component
    const contextValue ={
        food_list,
        cartItems,
        setCartItems,
        addToCart, 
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider 