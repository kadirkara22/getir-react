import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'
import FoodSection from './FoodSection'
import Kitchens from './Kitchens'
import Restoran from './Restoran'
import YemekCards from './YemekCards'

const GetirYemek = () => {
    return (
        <>
            <Header />
            <FoodSection />
            <Kitchens />
            <YemekCards />
            <Restoran />
            <Footer />
        </>
    )
}

export default GetirYemek
