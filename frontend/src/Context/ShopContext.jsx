import React, { useState } from "react";
import { createContext } from "react";


import all_products from "../Components/Assets/all_product"

export const  shopContext = createContext(null);

// for cart
const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_products.length+1; index++) {
        cart[index] = 0
        
    }
    return cart
}

const ShopContextProvider = (props)=>{
    
    const [cartItems,setcartItems] = useState(getDefaultCart())
    console.log(getDefaultCart())
    
    
    const addToCart = (itemId)=>{
        console.log(itemId)
        setcartItems((prev)=>{
            // ({...prev,[itemId]:prev[itemId]+1})
            console.log(prev)
        })
        // console.log(cartItems)
       
    }

    const removeFromCart = (itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_products.find((product)=>product.id===Number(item))
         
                totalAmount += itemInfo.new_price * cartItems[item];
            }
            return totalAmount;
            
        }
    }
  
    
    const contextValue = {all_products,getTotalCartAmount,cartItems,addToCart,removeFromCart}


    return (
        <shopContext.Provider value={contextValue}>
            {props.children}

        </shopContext.Provider>
    )
}
export default ShopContextProvider