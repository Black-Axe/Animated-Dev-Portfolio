/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useRef } from 'react'
import Scrollspy from 'react-scrollspy'
import { FiX, FiMenu, FiGithub } from 'react-icons/fi'
import logo from '../../assets/img/blackaxelogo.png'
import { SocialShare, GithubLink } from './config'

const Header = () => {
  const homeLink = '/'
  const headerColor = 'color-black'

  const headerRef = useRef(null)

  useEffect(() => {
    const elements = headerRef.current.querySelectorAll('.has-droupdown > a')

    function stickyHeader() {
      const value = window.scrollY
      if (value > 100) {
        headerRef.current.classList.add('sticky')
      } else {
        headerRef.current.classList.remove('sticky')
      }
    }

    window.addEventListener('scroll', stickyHeader)

    elements.forEach((element) => {
      element.addEventListener('click', () => {
        const submenu = element.parentElement.querySelector('.submenu')
        if (submenu !== null) {
          submenu.classList.toggle('active')
        }
      })
    })

    return () => {
      window.removeEventListener('scroll', stickyHeader)
      elements.forEach((element) => {
        element.removeEventListener('click', () => {
          const submenu = element.parentElement.querySelector('.submenu')
          if (submenu !== null) {
            submenu.classList.toggle('active')
          }
        })
      })
    }
  }, [])

  function menuTrigger() {
    headerRef.current.classList.toggle('menu-open')
  }

  function closeMenuTrigger() {
    headerRef.current.classList.remove('menu-open')
  }

  return (
    <header ref={headerRef} className={`header-area header-style-two header--fixed ${headerColor}`}>
      <div className="header-wrapper">
        <div className="header-left d-flex align-items-center">
          <div className="logo">
            <a href={homeLink}>
              <img src={logo} id="logoResize" alt="Logo" />
            </a>
          </div>
          <nav className="mainmenunav d-lg-block ml--50">
            <Scrollspy className="mainmenu" items={['home', 'about', 'service', 'portfolio', 'contact']} currentClassName="is-current" offset={-200}>
              <li><a href="/">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#service">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="/articles">Articles</a></li>
            </Scrollspy>
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
