import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext= createContext();

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/recipes')
            .then(res => setProduct(res.data.recipes))
    }, [])

    return <ProductContext.Provider value={{product, setProduct}}>{children}</ProductContext.Provider>

}
