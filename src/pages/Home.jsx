import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../components/common/Helmet";


import About from '../components/about/About';
import Slider from '../components/slider/Slider';
import Services from '../components/services/Services';

import Header from "../components/header/Header";
import Portfolio from "../components/portfolio/Portfolio";
import Footer from '../components/footer/Footer';
import Contact from '../components/contact/contact';



const HomePage = () => {


    return (
        <div>
            {/* seo content */}
            <Helmet />
            <div className="active-dark">


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

            </div>

        </div>
    )
}

export default HomePage;
