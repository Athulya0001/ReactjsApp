import {createContext, useState} from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const cartData = JSON.parse(localStorage.getItem("cart"))
    const [cart, setCart] = useState([cartData]);
    const addToCart=(newItem)=>{
        const existingItem = cart.findIndex((item)=>{
            item.id===newItem.id
        })
        if(existingItem!== -1){
            toast.error(`${newItem.title} already exists`);
            return false;
        }

        const updatedCart = [...cart, {...newItem, quantity: 1}];

        setCart(updatedCart)
        
        localStorage.setItem("cart", JSON.stringify(cart))
    }
return(
    <CartContext.Provider value={{addToCart, cart}}>
        {children}
    </CartContext.Provider>
)
}