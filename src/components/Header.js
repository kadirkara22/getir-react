import React, { useEffect, useState } from 'react'
import { HiLocationMarker } from 'react-icons/hi';
import { IoIosArrowForward } from 'react-icons/io';
import { RiUserFill, RiUserAddFill, RiSendToBack } from "react-icons/ri"
import { BiGlobe } from 'react-icons/bi';

import { ImgBuyuk, ImgCarsi, ImgGetir, ImgSu, ImgYemek } from './Nav';
import HeaderMenu from './HeaderMenu';
import { useDispatch, useSelector } from 'react-redux';
import { selectMenu } from 'redux/GetirSlice';
import Logo from './Logo';


export const menus = [
    {
        name: "getir",
        path: "/",
        icon: ImgGetir,
    },
    {
        name: "yemek",
        path: "/yemek/",
        icon: ImgYemek,
    },
    {
        name: "buyuk",
        path: "/buyuk/",
        icon: ImgBuyuk,
    },
    {
        name: "su",
        path: "/su/",
        icon: ImgSu,
    },
    {
        name: "carsi",
        path: "/carsi/",
        icon: ImgCarsi,
    },

]
const Header = () => {

    const active = useSelector((state) => state.getir.active)

    const dispatch = useDispatch()

    const handleMenuClick = (name) => {

        dispatch(selectMenu(name))
    }
    const logo = menus.find(item => item.name === active)
    console.log(logo)
    return (
        <>
            <div className="bg-brand-color sticky top-0 z-50">
                <div className="container mx-auto h-11 flex items-center justify-center md:justify-between px-4">

                    <div className="flex gap-x-1 mt-1">
                        {menus.map(({ name, icon, path }) => (
                            <HeaderMenu key={name} path={path} Icon={icon} name={name} active={active} handleMenuClick={handleMenuClick} />
                        ))}

                    </div>
                    <nav className="hidden md:flex gap-x-8 text-sm font-semibold">
                        <a href="#" className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100">
                            <BiGlobe size="20" />
                            <span className="sm:hidden lg:flex">Türkçe (TR)</span> </a>
                        <a href="#" className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100">
                            <RiUserFill size="20" />
                            <span className="sm:hidden lg:flex">Giriş Yap</span> </a>
                        <a href="#" className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100">
                            <RiUserAddFill size="20" />
                            <span className="sm:hidden lg:flex">Kayıt Ol</span> </a>
                    </nav>
                </div>
            </div>
            <div className="flex md:hidden items-center justify-center h-16 bg-primary-brand-color">
                <a href="#">

                    {<Logo LogoImg={logo.icon} active={active} />}
                </a>
            </div>
            <div className="container mx-auto flex md:hidden items-center h-10 px-4 justify-between p-3">
                <div className="flex items-center gap-x-2  text-sm font-semibold text-gray-600">
                    <HiLocationMarker size={18} className="text-primary-brand-color" />
                    Teslimat Adresi Belirle
                </div>
                <IoIosArrowForward size={18} className="text-primary-brand-color" />
            </div>
        </>
    )
}

export default Header
