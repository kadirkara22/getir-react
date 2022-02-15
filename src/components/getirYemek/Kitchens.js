import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import Title from '../ui/Title';
import Kitchen from '../../api/kitchens.json';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useWindowWidth } from '@react-hook/window-size';

function NextBtn(props) {
    const { className, style, onClick } = props;
    return (
        <button className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`} onClick={onClick}>
            <IoIosArrowForward size={22} />
        </button>
    );
}
function PrevBtn(props) {
    const { className, style, onClick } = props;
    return (
        <button className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`} onClick={onClick}>
            <IoIosArrowBack size={22} />
        </button>
    );
}

const Kitchens = () => {

    const [kitchens, setKitchens] = useState([]);

    const windowWidth = useWindowWidth()

    useEffect(() => {
        setKitchens(Kitchen)
    }, [])


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        autoplaySpeed: 3500,
        cssEase: "linear",
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 8,
                    arrows: false
                }
            },
            {
                breakpoint: 1045,
                settings: {
                    slidesToShow: 6,
                    arrows: false
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 5,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    arrows: false
                }
            }

        ]

    };

    return (
        <div className="container mx-auto md:pt-8 ">
            <div className="hidden md:block">
                <Title>Mutfaklar</Title>
            </div>

            <Slider className="md:-mx-2" {...settings}>
                {
                    kitchens.length && kitchens.map((kitchen, index) => (
                        <div key={kitchen.id}>
                            <div className="flex flex-col items-center justify-center sm:rounded-lg bg-white mx-2 cursor-pointer">
                                <picture className="px-2">
                                    <img src={kitchen.image} alt="mutfak" className="border-b-[1px]" />
                                </picture>
                                <h2 className="text-primary-brand-color font-semibold text-sm py-3">{kitchen.title}</h2>
                            </div>


                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default Kitchens

