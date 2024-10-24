import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';
import { ThemeContext } from '../context/ThemeContext';

const Contact = () => {
   const [lang]= useContext(LangContext);
   const [theme] = useContext(ThemeContext);

    return (
        <main className={theme}>
            <div className="contact-sect">
                <div className="contact-sect-title-text">
                    <h2>{lang==="EN"?"Bizimlə Əlaqə Saxla":"Contact Us"}</h2>
                    <p>{lang==="EN"?"Hər hansı sualınız var? Sadəcə bizə mesaj yazın!":"Any questions of remarks? Just wirte us a message!"}</p>
                </div>

                <div className="contact-sect-login container">
                    <div className="row g-0">
                        <div className="col-12 col-lg-5 col-md-5 col-sm-5">
                            <div className="contact-left-loc">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d317893.9709379043!2d-0.1195192!3d51.5031864!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20Eye%20Riverside%20Building%2C%20County%20Hall%20London%20SE1%207PB%20Birle%C5%9Fik%20Krall%C4%B1k!3m2!1d51.5031864!2d-0.11951919999999999!5e0!3m2!1saz!2saz!4v1728631556218!5m2!1saz!2saz" height={450} style={{ border: 0, width: '100%' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div>
                        </div>

                        <div className="col-12 col-lg-7 col-md-7 col-sm-7">
                            <div className="contact-right-form">
                                <form action="">
                                    <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                                        <div className="row">
                                            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                                                <label htmlFor="name">Name*</label> <br />
                                                <input type="text" placeholder='Your Name*'  />
                                            </div>
                                            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                                                <label htmlFor="email">Email*</label> <br />
                                                <input type="email" placeholder='Your email*' />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                                                <label htmlFor="phone">Phone</label> <br />
                                                <input type="number" placeholder='Your phone' />
                                            </div>
                                            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                                                <label htmlFor="reason">Select Reason</label> <br />
                                                <input type="email" placeholder='Select Reason' />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <label htmlFor="Message">Message</label>
                                            <textarea name="message" id="" placeholder='Your Review'></textarea>
                                        </div>
                                    </div>
                                    <div className="remember">
                                        <input type="checkbox" />
                                        <label htmlFor="saveinput">{lang==="EN"?"Növbəti dəfə şərh yazmaq üçün adımı, e-poçtumu və vebsaytımı bu brauzerdə yadda saxlayın.":"Save my name, email, and website in this browser for the next time I comment."}</label> <br />
                                    </div>
                                    <button className='send-btn' type='submit'>{lang==="EN"?"Mesaj Göndər":"Send Message"}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact