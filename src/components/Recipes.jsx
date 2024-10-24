 import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { SlBasket } from "react-icons/sl";
import { ProductContext } from '../context/ProductContext';
import slugify from 'slugify';
import { LangContext } from '../context/LangContext';
import { useCart } from 'react-use-cart';
import swal from 'sweetalert';

const Recipes = () => {
    const { id } = useParams();
    const { product } = useContext(ProductContext);
    const findProduct = product.find(p => slugify(p.name, { lower: true }) === id);
    const [lang] = useContext(LangContext);
    const { addItem } = useCart();

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {findProduct === undefined ? <img src="https://i.pinimg.com/originals/c4/cb/9a/c4cb9abc7c69713e7e816e6a624ce7f8.gif" alt="" /> : <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={findProduct.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{findProduct.name}</h1>
                        <p className="lead">{findProduct.description}</p>
                        <p className="price">${findProduct.price}</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <Link to='/shop' type="button" style={{ backgroundColor: '#C6202E', color: 'white', fontWeight: '600' }} className="btn btn-lg px-4 me-md-2">{lang === "EN" ? "Geri qayıt" : "Back to page"}</Link>
                            <button className="btn add-cart" onClick={()=>{swal("Product added","","success"), addItem(findProduct)}} ><SlBasket /> {lang === "EN" ? "Karta əlavə et" : "Add to cart"}</button>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Recipes