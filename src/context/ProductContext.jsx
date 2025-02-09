import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");


    useEffect(()=>{
        fetchProduct();
    },[])

    const fetchProduct = async() => {
        try {
            const response = await axios.get("https://dummyjson.com/products");
            console.log(response, "response")
        setProducts(response.data?.products);
        } catch (error) {
            console.log(error,"error fetching data")
        }
    }

    const getProducts = (id) => {
        const productId = product.find((product)=> product.id === id);
        return productId;
    }


    return(
        <ProductContext.Provider value={{products, getProducts, selectedCategory, setSelectedCategory}}>
            {children}
        </ProductContext.Provider>
    )

};
