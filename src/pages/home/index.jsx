import React from 'react'
import ScrollToTop from 'react-scroll-up'
import { FiChevronUp } from 'react-icons/fi'

import About from '../../components/about/About'
import Slider from '../../components/slider/Slider'
import Services from '../../components/services/Services'

import Header from '../../components/header/Header'
import Portfolio from '../../components/portfolio/Portfolio'
import Footer from '../../components/footer/Footer'
import Contact from '../../components/contact/contact'
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

    {/* Start Back To Top */}
    <div className="backto-top">
      <ScrollToTop showUnder={160}>
        <FiChevronUp />
      </ScrollToTop>
    </div>
    {/* End Back To Top */}

  </HomeContainer>
)

export default HomePage
