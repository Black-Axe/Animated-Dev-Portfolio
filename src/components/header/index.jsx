/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'

import { FiX, FiMenu, FiGithub } from 'react-icons/fi'
import logo from '../../assets/img/blackaxelogo.png'
import { SocialShare, GithubLink } from './config'
import { useHeader } from '../../hooks/header'

const Header = () => {
  const {
    Links, headerRef, menuTrigger, closeMenuTrigger
  } = useHeader()

  return (
    <header ref={headerRef} className="header-area header-style-two header--fixed color-black">
      <div className="header-wrapper">
        <div className="header-left d-flex align-items-center">
          <div className="logo">
            <a href="/">
              <img src={logo} id="logoResize" alt="Logo" />
            </a>
          </div>
          <nav className="mainmenunav d-lg-block ml--50">

            <Links />
          </nav>
        </div>
        <div className="header-right">
          <div className="social-share-inner">
            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
              {SocialShare.map((val, i) => (
                <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
              ))}
            </ul>
          </div>
          <div className="header-btn">
            <a className="rn-btn" href={GithubLink}>
              <FiGithub />
              {' '}
              <span>Github</span>
            </a>
          </div>
          {/* Start Humberger Menu  */}
          <div className="humberger-menu d-block d-lg-none pl--20">
            <span onClick={menuTrigger} className="menutrigger text-white"><FiMenu /></span>
          </div>
          {/* End Humberger Menu  */}
          <div className="close-menu d-block d-lg-none">
            <span onClick={closeMenuTrigger} className="closeTrigger"><FiX /></span>
          </div>
        </div>
      </div>

    </header>

  )
}

export default Header
