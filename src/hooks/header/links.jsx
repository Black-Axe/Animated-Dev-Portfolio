import React from 'react'
import Scrollspy from 'react-scrollspy'

const HomeLinks = () => (
  <>
    <li><a href="/">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#service">Services</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="/articles">Articles</a></li>
  </>
)
const ArticlesLinks = () => (
  <>
    <li><a href="/">Home</a></li>
    <li><a href="/#about">About</a></li>
    <li><a href="/#service">Services</a></li>
    <li><a href="/#portfolio">Portfolio</a></li>
    <li><a href="/#contact">Contact</a></li>
    <li><a href="/articles">Articles</a></li>
  </>
)

const Links = (pathname) => () => (
  <Scrollspy className="mainmenu" items={['home', 'about', 'service', 'portfolio', 'contact']} currentClassName="is-current" offset={-200}>
    {pathname === '/' ? <HomeLinks /> : <ArticlesLinks />}
  </Scrollspy>

)

export default Links
