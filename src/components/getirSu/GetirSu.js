import Footer from 'components/Footer'
import Header from 'components/Header'
import MobileApp from 'components/MobileApp'
import React from 'react'
import { useWindowWidth } from '@react-hook/window-size'
import SuSection from './SuSection'
import SuCampaign from './SuCampaign'
import SuCards from './SuCards'
import SuUrun from './SuUrun'
const GetirSu = () => {
    const windowWidth = useWindowWidth()
    return (
        <>
            <Header />
            {windowWidth <= 768 && <SuCampaign />}
            < SuSection />
            {windowWidth > 768 && <SuCampaign />}
            <SuUrun />
            <MobileApp />
            <SuCards />
            <Footer />
        </>
    )
}

export default GetirSu
