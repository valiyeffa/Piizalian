import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { FaFacebook, FaTwitter, FaWordpress, FaYoutube, FaRegUser, FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { RiSearchLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="header-head ">
                <div className="container">
                    <div className="location">
                        <IoLocationOutline />
                        <span>Corso Itali Aa Naples, Az 85022</span>
                    </div>
                    <div className="header-head-right">
                        <div className="call-order">
                            <MdOutlineDeliveryDining style={{fontSize:'22px'}} />
                            Call and Order:  +1 718-904-4450
                        </div>
                        <div className="country">
                            <form action="">
                                <select name="country" id="">
                                    <option value="newyork">New York</option>
                                    <option value="losangele">Los Angeles</option>
                                    <option value="losangele">Chicago</option>
                                </select>
                            </form>
                        </div>
                        <FaFacebook />
                        <FaTwitter />
                        <FaWordpress />
                        <FaYoutube />
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="https://demothemedh.b-cdn.net/piizalian/wp-content/uploads/2021/02/pizzalian-logo.svg" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  mx-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Menu</a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/shop">Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>

                        <div className="collapse-right-side">
                            <a href="#"><RiSearchLine /></a>
                            <a href="#"><FaRegUser /></a>
                            <a href="#"><FaRegHeart /></a>
                            <button className='items-btn'><SlBasket /> 0 items: $0.00</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Header