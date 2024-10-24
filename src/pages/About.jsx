import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';
import { ThemeContext } from '../context/ThemeContext';

const About = () => {
    const [lang] = useContext(LangContext);
    const [theme] = useContext(ThemeContext);

    return (
        <main className={theme}>
            <div className="pt-5 text-center">
                <h1 className="display-4 fw-bold text-body-emphasis">{lang === "EN" ? "Biz pizzaya dəliyik." : "We're crazy about pizza."}</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="hero-text">{lang === "EN" ? "Hot City Bakery, Inc-in bölməsi olan Piizalian, 1989-cu ildə bir qrup dost pizzaya olan ehtiraslarını hələ də dəli olduğumuz biznesə çevirəndə başladı. Yalnız bir neçə müştəri üçün xüsusi xəmirə diqqət yetirdiyimiz ilk günlərdən bəri bir qədər inkişaf etdik. Bir neçə il ərzində biz müştərilərin öz-özünə qalxan və yarım bişmiş qabıqlar və dondurulmuş xəmir topları ilə bağlı sorğularına cavab vermək üçün təcrübəmizi genişləndirdik." : "Piizalian, a division of Hot City Bakery, Inc., started in 1989 when a group of friends turned their passion for pizza into a business we’re still crazy about. We’ve evolved quite a bit since those first days when we focused solely on custom dough for a handful of customers. Over the course of several years, we expanded our expertise to answer customer requests for self-rising and par-baked crusts, and frozen dough balls."}</p>
                    <p>{lang === "EN" ? "Bu gün Piizalian bütün ölkə üzrə restoranlar, yemək xidməti və istehsalçılar üçün seçim təchizatçısıdır və olduqca yaxşı pizza xəmirlərinin tam çeşidini təklif edir - əslində o qədər yaxşıdır ki, müştərilər öz nüfuzlarını onlara etibar edirlər.." : "Today, Piizalian is the supplier of choice for restaurants, food service and manufacturers across the country, offering a full line of remarkably good pizza doughs – so good, in fact, that customers confidently stake their reputations on them."}</p>
                </div>
                <div className="overflow-hidden" >
                    <div className="container">
                        <img src="https://demothemedh.b-cdn.net/piizalian/wp-content/uploads/2021/03/hawaiian-pizza-2.jpg" className="img-fluid  rounded-3  mb-4" alt="Example image" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About