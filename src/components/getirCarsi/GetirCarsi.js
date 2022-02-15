
import Footer from 'components/Footer'
import Header from 'components/Header'
import MobileApp from 'components/MobileApp'
import React from 'react'
import CarsiCards from './CarsiCards'
import CarsiCategories from './CarsiCategories'
import CarsiSection from './CarsiSection'
import Isletme from './Isletme'


const GetirCarsi = () => {

    return (
        <>
            <Header />
            <CarsiSection />
            <CarsiCategories />
            <MobileApp />
            <CarsiCards />
            <Isletme />
            <Footer />
        </>
    )
}

export default GetirCarsi
