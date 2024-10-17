import React from 'react'

const About = () => {
    return (
        <div className="pt-5 text-center">
            <h1 className="display-4 fw-bold text-body-emphasis">We're crazy about pizza.</h1>
            <div className="col-lg-6 mx-auto">
                <p className="hero-text">Piizalian, a division of Hot City Bakery, Inc., started in 1989 when a group of friends turned their passion for pizza into a business we’re still crazy about. We’ve evolved quite a bit since those first days when we focused solely on custom dough for a handful of customers. Over the course of several years, we expanded our expertise to answer customer requests for self-rising and par-baked crusts, and frozen dough balls. <br />
                </p>
                <p>Today, Piizalian is the supplier of choice for restaurants, food service and manufacturers across the country, offering a full line of remarkably good pizza doughs – so good, in fact, that customers confidently stake their reputations on them.</p>
            </div>
            <div className="overflow-hidden" >
                <div className="container">
                    <img src="https://demothemedh.b-cdn.net/piizalian/wp-content/uploads/2021/03/hawaiian-pizza-2.jpg" className="img-fluid  rounded-3  mb-4" alt="Example image"  />
                </div>
            </div>
        </div>

    )
}

export default About