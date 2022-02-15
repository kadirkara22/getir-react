import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import Banners from "../../api/suBanners.json"
import Title from '../ui/Title';
import { useWindowWidth } from '@react-hook/window-size'


const SuCampaign = () => {
    const [banners, setBanners] = useState([]);

    const windowWidth = useWindowWidth()

    useEffect(() => {
        setBanners(Banners)
    }, [])


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 3500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    };
    return (
        <div className="container mx-auto md:pt-8">
            <div className="hidden md:block">
                <Title>Kampanyalar</Title>
            </div>

            <Slider className="md:-mx-2" {...settings}>
                {
                    banners.length && banners.map((banner, index) => (
                        <div key={banner.id}>
                            <picture className="block md:px-2">
                                <img src={banner.image} alt="kampanya" className="md:rounded-lg" />
                            </picture>

                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default SuCampaign