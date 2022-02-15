import Campaigns from 'components/Campaigns'
import Categories from 'components/Categories'
import Favorites from 'components/Favorites'
import Footer from 'components/Footer'
import Header from 'components/Header'
import MobileApp from 'components/MobileApp'
import React from 'react'
import { useWindowWidth } from '@react-hook/window-size'
import BuyukSection from './BuyukSection'
import BuyukCards from './BuyukCards'

const GetirBuyuk = () => {
    const windowWidth = useWindowWidth()
    return (
        <>
            <Header />
            {windowWidth <= 768 && <Campaigns />}
            <BuyukSection />
            <Categories />
            {windowWidth > 768 && <Campaigns />}
            <Favorites />
            <MobileApp />
            <BuyukCards />
            <Footer />
        </>
    )
}

export default GetirBuyuk
