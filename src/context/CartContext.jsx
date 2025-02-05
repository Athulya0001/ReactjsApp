import {createContext, useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const navigate = useNavigate()
    const cartData = JSON.parse(localStorage.getItem("cart")) || []

    const [cart, setCart] = useState(cartData);


    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    },[cart])

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
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };
    const incrementQuantity = (id) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));

    };

    const decrementQuantity = (id) => {
        const decrementCart = cart.map((item) =>
            item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
        )
        const updatedCart = decrementCart.filter((item) => item.quantity > 0);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));

    };

    const handlePayment = () => {
        setTimeout(()=>{
            localStorage.setItem("cart", JSON.stringify([]))

            toast.success("Order was successfull")
            navigate('/payment')
        },2000)
      };
return(
    <CartContext.Provider value={{addToCart, cart, removeFromCart, incrementQuantity, decrementQuantity, handlePayment, setCart}}>
        {children}
    </CartContext.Provider>
)
}