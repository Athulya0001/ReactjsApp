import {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [cart, setcart] = useState([]);
    const addToCart=(newItem)=>{
        setCart((prevState)=>
            [...prevState, newItem]
        );
    }
return(
    <CartContext.Provider value={{addToCart, cart}}>
        {children}
    </CartContext.Provider>

)
}