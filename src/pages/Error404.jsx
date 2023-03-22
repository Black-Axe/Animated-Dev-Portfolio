import React from 'react'
import ScrollToTop from 'react-scroll-up'
import { FiChevronUp } from 'react-icons/fi'
import Header from '../components/header'
import Footer from '../components/footer/Footer'
import Particles from '../components/particles'
import WrappedHeader from '../wrapped-components/header'

export default function Error404() {
  return (
    <>
      <WrappedHeader headerPosition="header--transparent" colorblack="color-black" logo="symbol-dark" />
      {/* Start Page Error  */}
      <div className="error-page-inner bg_color--4">
        <div className="container">
          <div className="frame-layout__particles">
            <Particles />
          </div>
          <div className="row">
            <div className="col-lg-12 visibleOverParticles">
              <div className="inner">
                <h3 className="sub-title">Page not found</h3>
                <div className="error-button">
                  <a className="rn-button-style--2 btn-solid" href="/">Back To Homepage</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Error  */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />
    </>
  )
}
