import React from 'react'

import Particles from "../particles/Particles";

import TextLoop from "react-text-loop";

export default function Slider() {
    const introText = "Hi, I'm Rick Astley";
    const SlideList = [
        {
            textPosition: 'text-left',
            category: 'Never gonna give you up',
            description: '',
            buttonText: 'Welcome',
            buttonLink: '#about'
        }
    ]

    const loopText = [
        "Software Developer",
        "Computer Scientist",
        "Web/Mobile Developer",
    ]
    
    return (
        <div id="home" className="fix ">
            <div className="slider-activation slider-creative-agency with-particles">

                <div className="frame-layout__particles">
                    <Particles /> 
                           
                </div>      
                
                <div className="slider-wrapper">

                
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image" key={index}>
                        {/* .elsowinyBG*/}
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1 className="title glitch-out">{introText}<br/>
                                            <TextLoop>
                                                {
                                                    loopText.map((val , i) => (
                                                        <span data-text={val} key={i} className="sherief-glitched">{val}</span>
                                                    ))
                                                }
                                            </TextLoop>{" "}
                                            </h1>
                                            <h2 className="miniHeader">Based in NJ.</h2>
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}


                            
                     
                    {/* End Single Slide */}
                </div>

                
            </div>
        </div>

    )
}
