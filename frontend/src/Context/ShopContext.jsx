import React from "react";
import { createContext } from "react";

import all_products from "../Components/Assets/all_product"

export const  shopContext = createContext(null);

const shopContextProvider = (props)=>{
    const contextValue = {all_products}

    return (
        <shopContext.Provider value={contextValue}>
            {props.children}

        </shopContext.Provider>
    )
}
export default shopContextProvider