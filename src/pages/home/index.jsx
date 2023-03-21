import React from 'react'

import About from '../../components/about/About'
import Slider from '../../components/slider/Slider'
import Services from '../../components/services/Services'

import Header from '../../components/header/Header'
import Portfolio from '../../components/portfolio/Portfolio'
import Footer from '../../components/footer/Footer'
import Contact from '../../components/contact/contact'
import ScrollToTop from '../../components/scroll-to-top/index'
import HomeContainer from './container'

const HomePage = () => (
  <HomeContainer>
    <Header />
    <Slider />
    <About />
    <Services />
    <Portfolio displayCount={6} />
    <Contact />
    <Footer />
    <ScrollToTop />

  </HomeContainer>
)

export default HomePage
