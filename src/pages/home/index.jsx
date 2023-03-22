import React from 'react'

import HomeContainer from './components/container/container'

import Slider from './components/slider/Slider'
import About from './components/about/About'
import Services from './components/services'

import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/contact'
import Footer from '../../components/footer/Footer'
import ScrollToTop from '../../components/scroll-to-top/index'
import WrappedHeader from '../../wrapped-components/header'

const HomePage = () => (
  <HomeContainer>
    <WrappedHeader />
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
