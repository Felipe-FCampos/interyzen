import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css';

// import React from 'react';
import Slider from 'react-slick';
import { icon_1, icon_2, icon_3, icon_4, icon_5, icon_6 } from '../assets/images';

const items = [
    {
        img: icon_1,
        text:"Conectividade Avançada",
        className:"itemA",
    },
    {
        img: icon_2,
        text:"Integração com Assistentes Virtuais",
        className:"itemB",
    },
    {
        img: icon_3,
        text:"Segurança Aprimorada",
        className:"itemA",
    },
    {
        img: icon_4,
        text:"Eficiência Energética",
        className:"itemB",
    },
    {
        img: icon_5,
        text:"Autonomia de Condução",
        className:"itemA",
    },
    {
        img: icon_6,
        text:"Diagnóstico e Manutenção Preditiva",
        className:"itemB",
    }
];

const CarouselMobile = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="carousel-mobile-container">
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div key={index} className={item.className}>
                        <img src={item.img} alt="" />
                        <p>{item.text}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CarouselMobile;