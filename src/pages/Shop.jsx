import React, { useContext, useEffect, useState } from 'react'
import { FaAngleRight } from "react-icons/fa";
import Card from '../components/Card';
import axios from 'axios';
import { ProductContext } from '../context/ProductContext';

const Shop = () => {
    const {product}= useContext(ProductContext);

    return (
        <div className='shop-sect'>
            <div className="shop-sect-head">
                <img src="https://demothemedh.b-cdn.net/piizalian/wp-content/uploads/2021/04/h1_bg-1.jpg" alt="" />

                <div className="shop-sect-text">
                    <h4>Shop</h4>
                    <p>Home<FaAngleRight />Shop</p>
                </div>
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col-4 col-lg-4 col-md-4 col-sm-4">
                        <div className="categories">
                            <div className="box">
                                <h4>
                                    Product Categories
                                </h4>
                                <div className="text">
                                    <p>Drinks</p> <hr />
                                    <p>Hamburger</p> <hr />
                                    <p>Kebab</p> <hr />
                                    <p>Pizza</p> <hr />
                                    <p>Salads</p> <hr />
                                    <p>Soup</p> <hr />
                                    <p>Uncategorized</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-8 col-lg-8 col-md-8 col-sm-8">
                        <div className="row g-2">
                            {product.map((item) => (
                                <Card key={item.id} alldata={item} />
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop