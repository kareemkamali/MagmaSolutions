import React from 'react'
import ContactUs from '../components/Contact-us/ContactUs'
import HeroSection from '../components/HeroSection/HeroSection'
import OurProduct from '../components/OurProduct/OurProduct'
import OurServices from '../components/OurServices/OurServices'
import OurTeam from '../components/OurTeam/OurTeam'
import VisionSection from '../components/VisionSection/VisionSection'
import Footer from '../shared/Footer/Footer'

import MainNavigation from '../shared/NavBar/MainNavigation'

const HomePage = () => {
  return (
 <>
 <MainNavigation></MainNavigation>
 <HeroSection></HeroSection>

  <VisionSection></VisionSection>
<OurServices></OurServices>
  <OurProduct></OurProduct>
 <OurTeam></OurTeam>
 <ContactUs></ContactUs>
  <Footer></Footer>
 </>
  )
}

export default HomePage