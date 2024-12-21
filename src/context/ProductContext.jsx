import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('https://mocki.io/v1/df39c8ab-c39a-4be1-a103-2a5d4f3bbe3e')
            .then(res => setProduct(res.data.categories))

    }, [])

    return <ProductContext.Provider value={{ product, setProduct }}>{children}</ProductContext.Provider>

}
