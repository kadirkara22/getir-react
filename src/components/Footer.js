import React from 'react'
import Menu from './ui/Menu'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BiGlobe } from 'react-icons/bi';
const Footer = () => {

    const menus = [
        {
            title: 'Getir\'i Keşfedin',
            items: [
                {
                    title: 'Hakkımızda'
                },
                {
                    title: 'Kariyer'
                },
                {
                    title: 'Teknoloji Kariyerleri'
                },
                {
                    title: 'İletişim'
                },
                {
                    title: 'COVID-19 Duyuru'
                },
                {
                    title: 'Sosyal Sorumluluk Projeleri'
                },
            ]
        },
        {
            title: 'Yardıma mı ihtiyacınız var?',
            items: [
                {
                    title: 'Sıkça Sorulan Sorular'
                },
                {
                    title: 'Kişisel Verilerin Korunması'
                },
                {
                    title: 'Gizlilik Politikası'
                },
                {
                    title: 'Kullanım Koşulları'
                },
                {
                    title: 'Çerez Politikası'
                }
            ]
        },
        {
            title: 'İş Ortağımız Olun',
            items: [
                {
                    title: 'Bayimiz Olun'
                },
                {
                    title: 'Deponuzu Kiralayın'
                },
                {
                    title: 'GetirYemek Restoranı Olun'
                },
                {
                    title: 'GetirÇarşı İşletmesi Olun'
                }
            ]
        }
    ]

    return (
        <div className="bg-white mt-10">
            <div className="container mx-auto px-4 md:px-0">
                <div className="grid gap-y-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 pt-5 md:pt-10">
                    <section>
                        <h6 className="text-lg text-primary-brand-color mb-4">Getir'i indirin!</h6>
                        <nav className="grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-1">

                            <a href="#">
                                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
                            </a>
                            <a href="#">
                                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
                            </a>
                            <a href="#">
                                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
                            </a>
                        </nav>
                    </section>
                    {
                        menus.map((menu, index) => <Menu key={index} {...menu} />)
                    }
                    <section className="hidden  xl:flex justify-end">
                        <a href="#" className="flex items-center rounded-lg justify-center bg-white shadow-lg w-[104px] h-[116px]">
                            <img className="w-[72px] h-[84px]" src="https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png" />
                        </a>
                    </section>
                </div>
                <div className="flex flex-col md:flex-row gap-y-4 justify-between items-center border-t border-gray-100 mt-6 py-6">
                    <div className="text-xs text-gray-700 flex gap-x-8">
                        &copy; 2022 Getir
                        <a href="#" className="text-primary-brand-color hover:underline relative before:w-[3px] before:h-[3px]  before:bg-gray-700 before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:rounded-full">
                            Bilgi Toplumu Hizmetleri
                        </a>
                    </div>
                    <nav className="flex gap-x-3">
                        <a href="#" className="w-8 h-8 text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color  flex items-center justify-center rounded-lg">
                            <FaFacebook size={21} />
                        </a>
                        <a href="#" className="w-8 h-8 text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center rounded-lg">
                            <FaTwitter size={21} />
                        </a>
                        <a href="#" className="w-8 h-8 text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color  flex items-center justify-center rounded-lg">
                            <FaInstagram size={21} />
                        </a>
                        <a href="#" className="h-8 flex transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color hover:border-transparent items-center px-2 text-sm gap-x-2 rounded text-gray-500 border border-gray-100 rounded-lg">
                            <BiGlobe size={18} />
                            Türkçe (TR)
                        </a>
                    </nav>
                </div>
            </div>

        </div>
    )
}

export default Footer
