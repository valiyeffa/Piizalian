import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('https://mocki.io/v1/bdd0809c-ce83-43cb-bb56-b792c1f66baa')
            .then(res => setProduct(res.data.categories))

    }, [])

    return <ProductContext.Provider value={{ product, setProduct }}>{children}</ProductContext.Provider>

}
