import React from 'react'
import { SlBasket } from "react-icons/sl";
import { FaRegHeart,FaRegEye  } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Card = ({alldata}) => {
    return (
        <div className='products col-6 col-lg-4 col-md-4 col-sm-6'>
            <div className="card" >
                <img src={alldata.image} style={{objectFit:"contain"}} height={250} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{alldata.name.slice(0,18)}...</h5>
                    <p className="card-text">{alldata.tags[0]}</p>
                    <p className="price">$ {alldata.caloriesPerServing}</p>
                    <a href="#" className="btn add-cart"><SlBasket /> Add to cart</a>
                </div>

                <div className="add">
                <a href="#" className='add-btn'><FaRegHeart /></a>
                <Link to={`/shop/${alldata.id}`} className='add-btn'><FaRegEye /></Link>
                <a href="#" className='add-btn'><FaRegCopy /></a>
                </div>
            </div>
        </div>
    )
}

export default Card