import React,{useEffect} from 'react'
import logo from "./blackaxelogo.png"
import Scrollspy from 'react-scrollspy'

import { FiX , FiMenu, FiGithub} from "react-icons/fi";
import { SocialShare, GithubLink } from './config';

export default function InnerHeader() {
   
    const homeLink = "/";
    const headerColor = "color-black"

    function menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open');
    }
    function closeMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }

    useEffect(() => {
        var elements = document.querySelectorAll('.has-droupdown > a');

        function Sticky() {
            var value = window.scrollY;
            if (value > 100) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
                
            }
        }
        window.addEventListener('scroll', Sticky);

        for(var i in elements) {
            if(elements.hasOwnProperty(i)){
                elements[i].addEventListener('click', function() {
                    if(this.parentElement.querySelector('.submenu') !== null) {
                        this.parentElement.querySelector('.submenu').classList.toggle('active');
                    }
                });
            }
        }

        return () => {
           window.removeEventListener('scroll', Sticky);

        }
        
        
    }, [])



    return (

        <header className={`header-area header-style-two header--fixed ${headerColor}`}>
            <div className="header-wrapper">
                    <div className="header-left d-flex align-items-center">
                        <div className="logo">
                            <a href={homeLink}>
                                <img src={logo} id="logoResize" alt="sherief elsowiny"/>
                            </a>
                        </div>
                        <nav className="mainmenunav d-lg-block ml--50">
                            <Scrollspy className="mainmenu" items={['home','about','service','portfolio','contact']} currentClassName="is-current" offset={-200}>
                            <li><a href="/">Home</a></li>
                                <li><a href="/#about">About</a></li>
                                <li><a href="/#service">Services</a></li>
                                <li><a href="/#portfolio">Portfolio</a></li>
                                <li><a href="/#contact">Contact</a></li>
                                <li><a href="/articles">Articles</a></li>
                            </Scrollspy>
                        </nav>
                    </div>
                    <div className="header-right">
                        <div className="social-share-inner">
                            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="header-btn">
                            <a className="rn-btn" href={GithubLink}>
                            <FiGithub /> <span>Github</span>
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
