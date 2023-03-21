import React from 'react'
import logo from '../../assets/img/blackaxelogo.png'

import { SocialShare } from '../header/config'

const MyWebsite = 'mywebsite.com'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const Copyright = `Copyright ${currentYear}`
  return (
    <div className="footer-style-2 bg_image bg_image--1 visibleOverParticles" data-black-overlay="6">
      <div className="wrapper plr--50 plr_sm--20">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner">
              <div className="logo text-center text-sm-left mb_sm--20">
                <a href="/">
                  <img src={logo} id="logoResize" alt="logo images" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner text-center">
              <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}><a href={`${val.link}`} target="_blank" rel="noopener noreferrer">{val.Social}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
              <div className="text">
                <p>
                  {Copyright}
                  {' '}
                  <span className="blueify">{MyWebsite}</span>
                  {' '}
                  All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
