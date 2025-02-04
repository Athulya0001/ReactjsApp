import {createContext, useState} from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const cartData = JSON.parse(localStorage.getItem("cart")) || []
    const [cart, setCart] = useState(cartData);
    const addToCart=(newItem)=>{
        const existingItem = cart.findIndex((item)=>{
            item.id===newItem.id
        })
        if(existingItem!== -1){
            toast.error(`${newItem.title} already exists`);
            return false;
        }

        const updatedCart = [...cart, { ...newItem, quantity: 1 }];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    const removeFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage
    };
    const incrementQuantity = (id) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage

    };

    const decrementQuantity = (id) => {
        const decrementCart = cart.map((item) =>
            item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
        )
        const updatedCart = decrementCart.filter((item) => item.quantity > 0);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage

    };
return(
    <CartContext.Provider value={{addToCart, cart, removeFromCart, incrementQuantity, decrementQuantity}}>
        {children}
    </CartContext.Provider>
)
}