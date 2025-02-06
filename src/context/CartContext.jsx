import {createContext, useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const CartContext = createContext();

// Cart Provider
export const CartProvider = ({children})=>{
    const navigate = useNavigate()
    const cartData = JSON.parse(localStorage.getItem("cart")) || []

    const [cart, setCart] = useState(cartData);
    const [selectedProduct, setSelectedProduct] = useState(null);


    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    },[cart])

    // addToCart function
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

    // removeFromCart function
    const removeFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // incrementCart Function
    const incrementQuantity = (id) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));

    };

    // decrementQunatity function
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

    // handlePayment function for buying whole items in the cart
    const handlePayment = () => {
        setCart([]);
        toast.success("Order was successfull")
        setTimeout(()=>{
            navigate('/payment')
        },1000)
      };


  const handleSinglePayment = (id) => {
    const product = cart.find((item) => item.id === id);
    setSelectedProduct(product);
    setCart(cart.filter(item=>item.id!==id));
        navigate('/payment')
      
  };
      
return(
    <CartContext.Provider value={{addToCart, cart, removeFromCart, incrementQuantity, decrementQuantity, handlePayment, handleSinglePayment, selectedProduct}}>
        {children}
    </CartContext.Provider>
)
}