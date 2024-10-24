import React, { useContext, useEffect, useState } from 'react'
import { FaAngleRight } from "react-icons/fa";
import { TbPizza } from "react-icons/tb";
import Card from '../components/Card';
import { ProductContext } from '../context/ProductContext';
import { LangContext } from '../context/LangContext';
import { ThemeContext } from '../context/ThemeContext';

const Shop = () => {
    const [lang] = useContext(LangContext);
    const { product } = useContext(ProductContext);
    const [theme] = useContext(ThemeContext);

    const [filtered, setFiltered] = useState([]);
    const selectedCategory = (ctg) => {
        const filteredProduct = product.filter(p => p.category === ctg);
        setFiltered(filteredProduct);
    }

    return (
        <main className={theme}>
            <div className='shop-sect'>
                <div className="shop-sect-head">
                    <img src="https://demothemedh.b-cdn.net/piizalian/wp-content/uploads/2021/04/h1_bg-1.jpg" alt="" />

                    <div className="shop-sect-text">
                        <h4>{lang === "EN" ? "MAĞAZA" : "SHOP"}</h4>
                        <p>{lang === "EN" ? "Əsas Səhifə" : "Home"}<FaAngleRight />{lang === "EN" ? "Mağaza" : "Shop"}</p>
                    </div>
                </div>

                <div className="container my-5">
                    <div className="row ">
                        <div className="col-12 col-lg-3 col-md-4 col-sm-12">
                            <div className="categories">
                                <div className="box">
                                    <div className="box-title">
                                        <p className='box-title-text'>
                                            {lang === "EN" ? "Məhsul kategoriyaları" : "Product categories"}
                                        </p>
                                    </div>
                                    <div className="text">
                                        <a href='#' onClick={() => { selectedCategory('0') }} ><TbPizza className='pizza-icon' /> {lang === "EN" ? "Hamısı" : "All"} </a>
                                        <a href='#' onClick={() => { selectedCategory('Pizzas') }} ><TbPizza className='pizza-icon' /> Pizza</a>
                                        <a href='#' onClick={() => { selectedCategory('Drinks') }} ><TbPizza className='pizza-icon' /> Drinks</a>
                                        <a href='#' onClick={() => { selectedCategory('Salads') }} ><TbPizza className='pizza-icon' /> Salads</a>
                                        <a href='#' onClick={() => { selectedCategory('Desserts') }} ><TbPizza className='pizza-icon' /> Desserts</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-9 col-md-8 col-sm-12">
                            <div className="row g-2">
                                {filtered.length === 0 ? product.map((item) => (
                                    <Card key={item.id} alldata={item} />
                                )) : filtered.map((item) => (
                                    <Card key={item.id} alldata={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Shop