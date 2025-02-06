import {createContext, useEffect, useState, useContext} from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from "./ProductContext";
import axios from "axios";



export const CartContext = createContext();

// Cart Provider
export const CartProvider = ({children})=>{
    const {products, getProducts} = useContext(ProductContext);
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
        console.log(updatedCart)
    setCart(updatedCart);
    }

    const handleAddToCart = async (id) => {
        const result = await axios.get(`https://dummyjson.com/products/${id}`);
        const cartItem = result.data;
        toast.success(`${cartItem.title} added to cart`);
        addToCart(cartItem);
      };

    // removeFromCart function
    const removeFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
    };

    // incrementCart Function
    const incrementQuantity = (id) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
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
    <CartContext.Provider value={{addToCart,handleAddToCart, cart, removeFromCart, incrementQuantity, decrementQuantity, handlePayment, handleSinglePayment, selectedProduct}}>
        {children}
    </CartContext.Provider>
)
}