import React from 'react'

import TextLoop from 'react-text-loop'
import { introText, SlideList, loopText } from './config'

const Slider = () => (
  <div id="home" className="fix ">
    <div className="">

      <div className="slider-wrapper">

        {/* Start Single Slide */}
        {SlideList.map((value, index) => (
          <div
            className="slide personal-portfolio-slider
            slider-paralax slider-style-3 d-flex align-items-center
            justify-content-center bg_image"
            key={index}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className={`inner ${value.textPosition}`}>
                    {value.category ? <span>{value.category}</span> : ''}
                    <h1 className="title glitch-out">
                      {introText}
                      <br />
                      <TextLoop>
                        {loopText.map((val, i) => (
                          <span
                            data-text={val}
                            key={i}
                            className="text-glitched"
                          >
                            {val}
                          </span>
                        ))}
                      </TextLoop>
                    </h1>
                    <h2 className="miniHeader">Based in NY.</h2>
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

export default Slider
