import React, { useContext, useState } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { FaFacebook, FaTwitter, FaWordpress, FaYoutube, FaRegUser, FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { RiSearchLine } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import slugify from 'slugify';
import { LangContext } from '../context/LangContext';
import { FaRegTrashCan } from "react-icons/fa6";
import { useCart } from 'react-use-cart';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
    const { product } = useContext(ProductContext);
    const [lang, setLang] = useContext(LangContext);
    const [keyword, setKeyword] = useState('');
    const [cls, setCls] = useState();
    const [overlay, setOverlay] = useState();
    const { isEmpty, items } = useCart();
    const [theme, setTheme] = useContext(ThemeContext);
    const { totalItems, cartTotal, removeItem } = useCart();

    return (
        <header>

            {/* ===================================== BASKET START =================================== */}

            <div className={`${overlay}`}>
                <div className={`${cls} basket bg-light`}>
                    <div className="head d-flex align-items-center justify-content-between px-3 py-2">
                        <h2 className='fs-4 fw-bold'>SHOPPING CART</h2>
                        <button onClick={() => { setCls(""); setOverlay("") }} className='bg-transparent border-0 fs-3'><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <hr className='m-0' />
                    {isEmpty ? <div className='d-flex justify-content-center'><img style={{ width: '100%' }} src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="" /></div> : <div>
                        {items.map(item => (
                            <div className="cart body d-flex align-items-center justify-content-between" key={item.id}>
                                <div className="image border">
                                    <img height={100} src={item.image} alt="" />
                                </div>
                                <div className="content">
                                    <h4 >{item.name}</h4>
                                    <h6>30cm, Soles fit</h6>
                                    <p>{item.quantity} x <span className='price'>${item.price}</span></p>
                                </div>
                                <div className="delete">
                                    <button className='rubish-bin' onClick={() => { removeItem(item.id) }}><FaRegTrashCan /></button>
                                </div>
                            </div>

                        ))
                        }
                    </div>
                    }

                    <hr className='m-0' />
                    <div className="bottom-total">
                        <div className="total-text">
                            <p>SUBTOTAL:</p>
                        </div>
                        <div className="total-price">
                            <p>${cartTotal}</p>
                        </div>
                    </div>

                </div>
            </div>
            {/* ===================================== BASKET END ===================================== */}

            <div className="header-head ">
                <div className="container">
                    <div className="location">
                        <IoLocationOutline />
                        <span>Corso Itali Aa Naples, Az 85022</span>
                    </div>
                    <div className="header-head-right">
                        <div className="call-order">
                            <MdOutlineDeliveryDining style={{ fontSize: '22px' }} />
                            {lang === "EN" ? 'Zəng və Sifariş: +1 718-904-4450' : 'Call and Order:  +1 718-904-4450'}

                        </div>
                        <div className="language">
                            <button className='lang-btn' onClick={() => {
                                lang === "AZ" ? setLang('EN') : setLang('AZ');
                                lang === "AZ" ? localStorage.setItem('lang', 'EN') : localStorage.setItem('lang', 'AZ');
                            }}>{lang}</button>
                        </div>
                        <div className="theme">
                            <button className='theme-btn' onClick={() => {
                                theme === "light" ? setTheme('dark') : setTheme('light');
                                theme === "light" ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
                            }}>{theme==="light"? "dark": "light"}</button>
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
                                <NavLink className="nav-link" to="/">{lang === "EN" ? 'Ana Sehife' : 'Home'}</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{lang === "EN" ? "Menyu" : "Menu"}</a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">{lang === "EN" ? "Haqqımızda" : "About"}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/shop">{lang === "EN" ? "Mağaza" : "Shop"}</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">{lang === "EN" ? "Əlaqə" : "Contact"}</NavLink>
                            </li>
                        </ul>

                        <div className="collapse-right-side">

                            {/* =======================================MODAL START================================ */}

                            <a href="#" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <RiSearchLine />
                            </a>

                            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">{lang === "EN" ? "Yemək Axtar" : "Search Foods"}</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                        </div>
                                        <div className="modal-body">
                                            <div className="input-group mb-3">
                                                <input onChange={e => setKeyword(e.target.value)} type="text" className="form-control" placeholder="Recipes name" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                                <button className="btn search-btn" type="button" id="button-addon2">{lang === "EN" ? "Axtar" : "Search"}</button>
                                            </div>

                                            <ul className="list-group">
                                                {!keyword ? "" : product.filter(p => slugify(p.name, { lower: true }).includes(keyword)).map(item => (
                                                    <Link key={item.id} to={`/shop/${slugify(item.name, { lower: true })}`} style={{ fontSize: '18px' }} className="text-bg-light list-group-item"><div data-bs-dismiss="modal"><img className='me-2' width={70} src={item.image} alt="" /> {item.name}</div></Link>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ========================================MODAL END========================================= */}
                            <a href="#"><FaRegUser /></a>
                            <a href="#"><FaRegHeart /></a>
                            <button onClick={() => { setCls('open'); setOverlay('overlay') }} className='items-btn'><SlBasket /> {totalItems} items: ${cartTotal.toFixed(2)}</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header  