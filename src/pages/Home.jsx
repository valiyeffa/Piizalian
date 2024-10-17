import React, { useContext, useEffect, useState } from 'react'
import { SlBasket } from "react-icons/sl";
import { LiaPizzaSliceSolid } from "react-icons/lia";
import { LuLeafyGreen, LuSoup } from "react-icons/lu";
import { GiTacos, GiChickenOven } from "react-icons/gi";
import { RiDrinks2Line } from "react-icons/ri";
import { CiFries } from "react-icons/ci";
import Card from '../components/Card';
import axios from 'axios';
import { ProductContext } from '../context/ProductContext';

const Home = () => {
   const {product}= useContext(ProductContext);

    return (
        <main>
            <div className="main-first-sect">
                <div className="main-first-sect-center">
                    <img style={{ width: '60%', height: '65%' }} src="https://demothemedh.b-cdn.net/piizalian/wp-content/uploads/2021/04/revslider_h1_shape.png" alt="" />
                    <div className="center-text">
                        <p>FAST FOOD RESTAURANT</p>
                        <h2>Always fresh and Tasty</h2>
                        <button className='order-btn'><SlBasket /> Order Now</button>
                    </div>
                </div>
            </div>

            <div className="main-second-sect">
                <div className="container">
                    <div className="row ">
                        <div className="col-3 col-lg-1 col-md-2 col-sm-2">
                            <div className="food">
                                <LiaPizzaSliceSolid />
                                <span>Pizza</span>
                            </div>
                        </div>
                        <div className="col-3 col-lg-1 col-md-2 col-sm-2">
                            <div className="food">
                                <i className="fa-solid fa-burger"></i>
                                <span>Burgers</span>
                            </div>
                        </div>
                        <div className="col-3 col-lg-1 col-md-2 col-sm-2">
                            <div className="food">
                                <LuLeafyGreen />
                                <span>Salads</span>
                            </div>
                        </div>
                        <div className="col-3 col-lg-1 col-md-2 col-sm-2">
                            <div className="food">
                                <GiTacos />
                                <span>Kebab</span>
                            </div>
                        </div>
                        <div className="col-3 col-lg-1 col-md-2 col-sm-2">
                            <div className="food">
                                <LuSoup />
                                <span>Soup</span>
                            </div>
                        </div>
                        <div className="col-3 col-lg-1 col-md-2 col-sm-2">
                            <div className="food">
                                <CiFries />
                                <span>Fries</span>
                            </div>
                        </div>
                        <div className="col-3 col-lg-1 col-md-2 col-sm-2">
                            <div className="food">
                                <GiChickenOven className='bur' />
                                <span>Chicken</span>
                            </div>
                        </div>
                        <div className="col-3 col-lg-1 col-md-2 col-sm-2">
                            <div className="food">
                                <RiDrinks2Line />
                                <span>Drink</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-thrid-sect">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-12 col-lg-8 col-md-8 col-sm-8">
                            <div className="box frst-box">
                                <div className="box-body">
                                    <span>Fast Food</span>
                                    <h4>American <br /> Burgers</h4>
                                    <span>Bringing People Together</span>
                                    <button className='order-btn scnd-btn'><SlBasket /> Order Now</button>
                                </div>
                                <div className="frst-box-img">
                                    <img src="https://demothemedh.b-cdn.net/piizalian/wp-content/uploads/2021/03/h1_img-1.png" alt="" />

                                    <div className="sale">
                                        <p>Only <span>$59</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-4 col-sm-4">
                            <div className="box scnd-box">
                                <div className="box-body">
                                    <span>Hot Fresh</span>
                                    <h4>Salats <br /> Taste</h4>
                                    <span>New Super Delicious</span>
                                    <button className='order-btn scnd-btn'><SlBasket /> Order Now</button>
                                </div>

                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-last-sect">
                <div className="last-sect-title">
                    <span>CHOOSE YOUR FLAVOR</span>
                    <h3>THE BEST PIZZA MENU IN TOWN</h3>
                    <span className='mini-text'>There’s always something interesting down here</span>
                </div>

                <div className="products-sect">
                    <div className="container">
                        <div className="row">
                            {product.map((item) => (
                                <Card key={item.id} alldata={item} />
                            ))}

                            {/* <Card pimg='https://demothemedh.b-cdn.net/piizalian/wp-content/uploads/2019/12/p1-600x600.jpg' ptext='FANTASTIC IRON SHOES' pprice='$101.00 - $187.00' />
                            <Card pimg='https://demothemedh.b-cdn.net/piizalian/wp-content/uploads/2019/12/p2-600x600.jpg' ptext='SLEEK IRON CLOCK' pprice='$107.00 - $198.00' />
                            <Card pimg='https://demothemedh.b-cdn.net/piizalian/wp-content/uploads/2019/12/p10-600x600.jpg' ptext='GORGEOUS SILK PLATE' pprice='$100.00 - $194.00' />
                            <Card pimg='https://demothemedh.b-cdn.net/piizalian/wp-content/uploads/2019/09/p3-600x600.jpg' ptext='FANTASTIC MARBLE BAG' pprice='$104.00 - $198.00' />
                            <Card pimg='https://demothemedh.b-cdn.net/piizalian/wp-content/uploads/2019/12/p1-600x600.jpg' ptext='FANTASTIC IRON SHOES' pprice='$101.00 - $187.00' />
                            <Card pimg='https://demothemedh.b-cdn.net/piizalian/wp-content/uploads/2019/12/p2-600x600.jpg' ptext='SLEEK IRON CLOCK' pprice='$107.00 - $198.00' />
                            <Card pimg='https://demothemedh.b-cdn.net/piizalian/wp-content/uploads/2019/12/p10-600x600.jpg' ptext='GORGEOUS SILK PLATE' pprice='$100.00 - $194.00' />
                            <Card pimg='https://demothemedh.b-cdn.net/piizalian/wp-content/uploads/2019/09/p3-600x600.jpg' ptext='FANTASTIC MARBLE BAG' pprice='$104.00 - $198.00' /> */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home