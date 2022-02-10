import React, { useState } from 'react'
import Slider from "react-slick";
import ReactFlagsSelect from 'react-flags-select';

const HeroSection = () => {
    const [selected, setSelected] = useState('TR');

    const phones = {
        AF: '+93',
        US: '+1',
        DE: '+49',
        TR: '+90',
        IT: '+7',
        IN: '+15',
        AR: '+54',
    }
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
            <Slider {...settings}>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" />
                </div>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg" />
                </div>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg" />
                </div>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" />
                </div>
            </Slider>
            <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
                <div>
                    <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
                    <h3 className="text-4xl mt-8 font-semibold text-white">
                        Dakikalar içinde <br />kapınızda</h3>
                </div>
                <div className="w-[400px] rounded-lg bg-gray-50 p-6">
                    <h4 className="text-primary-brand-color text-center font-semibold mb-4">Giriş yap veya kayıt ol</h4>
                    <div className="flex gap-x-2">
                        <ReactFlagsSelect
                            countries={Object.keys(phones)}
                            customLabels={phones}
                            onSelect={code => setSelected(code)}
                            selected={selected}
                            className="flag-select"
                        />
                        <label className="flex-1 relative block">
                            <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2" />
                            <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">Telefon Numarası</span>
                        </label>
                    </div>
                    <button>
                        Telefon
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection