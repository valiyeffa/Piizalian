import React, { useContext } from 'react'
import { SlBasket } from "react-icons/sl";
import { FaRegHeart, FaRegEye } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import { LangContext } from '../context/LangContext';
import { useCart } from 'react-use-cart';
import swal from 'sweetalert';

const Card = ({ alldata }) => {
    const [lang] = useContext(LangContext);
    const { addItem } = useCart();

    return (
        <div className='g-4 products col-6 col-lg-4 col-md-4 col-sm-6'>
            <div className="card" >
                <img src={alldata.image} style={{ objectFit: "contain" }} height={250} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{alldata.name}</h5>
                    <p className="card-text">{alldata.description.slice(0, 18)}...</p>
                    <p className="price">$ {alldata.price}</p>
                    <button className="btn add-cart" onClick={()=>{swal("Product added","","success"),addItem(alldata)}}><SlBasket /> {lang === "EN" ? "Karta əlavə et" : "Add to cart"}</button>
                </div>

                <div className="add">
                    <a href="#" className='add-btn'><FaRegHeart /></a>
                    <Link to={`/shop/${slugify(alldata.name, { lower: true })}`} className='add-btn'><FaRegEye /></Link>
                    <a href="#" className='add-btn'><FaRegCopy /></a>
                </div>
            </div>
        </div>
    )
}

export default Card