import React, { useState } from 'react'
import Slider from "react-slick";
import ReactFlagsSelect from 'react-flags-select';
import { FaFacebook } from "react-icons/fa";
import { useWindowWidth } from '@react-hook/window-size'

const BuyukSection = () => {
    const [selected, setSelected] = useState('TR');

    const windowWidth = useWindowWidth()
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
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: "linear"
    };
    return (
        <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
            {windowWidth >= 768 && <Slider {...settings}>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/market-1-ae76901414c55d46ffc17ff0182c264b.jpg" />
                </div>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/market-2-4d10b864d127e72942af806876ff3f24.jpg" />
                </div>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/market-3-40a5665bd2f5bf388061e0c2f3ca4a4b.jpg" />
                </div>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/market-4-084f26811a2ec79bfcac5582e29db80d.jpg" />
                </div>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/market-5-9585774ecca123da206c87c36f01e0e8.jpg" />
                </div>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/market-6-61d65d55307e0c0da7bc7fe928951ba3.jpg" />
                </div>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/market-8-f549a531be51240734553fb71550ce5d.jpg" />
                </div>
            </Slider>}
            <div className="md:container flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
                <div className="hidden md:block">
                    <img className="h-16" src="https://getir.com/_next/static/images/getir-more-logo-43b84c4381edcbda2c1d686d826034de.svg" alt="" />
                    <h3 className="text-4xl mt-8 font-semibold text-white">
                        Market fiyat??na <br />kap??n??zda</h3>
                </div>
                <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
                    <h4 className="text-primary-brand-color text-center font-semibold mb-4">Giri?? yap veya kay??t ol</h4>
                    <div className="grid gap-y-3">
                        <div className="flex gap-x-2">
                            <ReactFlagsSelect
                                countries={Object.keys(phones)}
                                customLabels={phones}
                                onSelect={code => setSelected(code)}
                                selected={selected}
                                className="flag-select"
                            />
                            <label className="flex-1 relative group block">
                                <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2" />
                                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">Telefon Numaras??</span>
                            </label>
                        </div>
                        <button className="bg-brand-yellow transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold text-primary-brand-color">
                            Telefon numaras?? ile devam et
                        </button>
                        <hr className="h-[1px] bg-gray-300 my-2" />
                        <button className="bg-blue-700 bg-opacity-10 text-blue-700 text-opacity-80 px-4 transition-colors hover:bg-blue-700 hover:text-white h-12 flex items-center rounded-md w-full text-sm font-semibold text-primary-brand-color">
                            <FaFacebook size={24} />
                            <span className="mx-auto">Facebook numaras?? ile devam et</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyukSection
