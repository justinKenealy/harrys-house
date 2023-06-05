import { createContext, useState } from "react";

const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    emptyCart: () => {},
    getTotalCost: () => {},

});

export const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addItemToCart,
        removeItemFromCart,
        emptyCart,
        getTotalCost
    }  
    
    return (
        <CartContext.Provider vale={contextValue}>
            {children}
        </CartContext.Provider>
    )
}
//Provider -> 