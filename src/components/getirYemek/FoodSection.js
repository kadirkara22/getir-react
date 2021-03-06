import React, { useState } from 'react'
import Slider from "react-slick";
import ReactFlagsSelect from 'react-flags-select';
import { FiSearch } from 'react-icons/fi'
import { useWindowWidth } from '@react-hook/window-size'
import { MdLocationSearching } from 'react-icons/md';


const FoodSection = () => {
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
        autoplaySpeed: 5000,
        cssEase: "linear"
    };

    return (
        <div className="relative h-auto md:h-[500px]">
            {windowWidth >= 768 && <Slider {...settings}>
                <div>
                    <video autoPlay loop className="w-full h-[500px] object-cover">
                        <source src="https://getir.com/videos/1-hamburger.mp4" type="video/mp4"></source>
                    </video>

                </div>
                <div>
                    <video autoPlay loop className="w-full h-[500px] object-cover">
                        <source src="https://getir.com/videos/2-doner.mp4" type="video/mp4"></source>
                    </video>
                </div>
                <div>
                    <video autoPlay loop className="w-full h-[500px] object-cover">
                        <source src="https://getir.com/videos/3-pide.mp4" type="video/mp4"></source>
                    </video>
                </div>
                <div>
                    <video autoPlay loop className="w-full h-[500px] object-cover">
                        <source src="https://getir.com/videos/4-pizza.mp4" type="video/mp4"></source>
                    </video>
                </div>
                <div>
                    <video autoPlay loop className="w-full h-[500px] object-cover">
                        <source src="https://getir.com/videos/5-kunefe.mp4" type="video/mp4"></source>
                    </video>
                </div>
            </Slider>}
            <div className="md:container flex justify-end items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">

                <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
                    <h4 className="text-primary-brand-color text-center font-semibold mb-4">Adresine getiren restoranlar?? g??r</h4>
                    <div>
                        <label className="flex-1 relative group block">
                            <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2" />
                            <div>
                                <FiSearch size={18} className="absolute top-5 left-5 flex items-center text-primary-brand-color" />
                                <span className="absolute top-0 left-10 h-full px-4 flex items-center text-sm text-gray-500 ">??rn. Etiler mh.</span>
                            </div>

                            <div className="absolute top-2 right-4 p-2  lg:w-40 lg:h-10 rounded-lg bg-gray-400 flex items-center justify-evenly text-gray-100 ">
                                <div className="flex items-center justify-center h-6 w-6">
                                    <MdLocationSearching size={16} />
                                </div>

                                <span className="hidden md:block font-semibold text-sm">Konumumu bul</span>


                            </div>
                        </label>
                    </div>
                    <div className="relative text-center mb-6 mt-4 ">
                        <span className="text-gray-500 font-semibold bg-gray-50  px-3 before:content-[''] before:absolute before:top-6 before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:w-[400px] before:h-[2px] before:bg-gray-300">veya</span>
                    </div>
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodSection
