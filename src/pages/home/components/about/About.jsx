import React from 'react'
import config from './config'
import myAvatar from './avatar.png'
import HomeTabs from './tabs'

const About = () => {
  const { title } = config
  const { description } = config
  const { subtitle } = config

  // you can create an amongus avatar here
  // https://www.amongusavatarcreator.com/

  return (

    <div id="about" className="fix">
      <div className="about-area ptb--120  bg_color--1">
        <div className="about-wrapper">
          <div className="container">

            <div className="row row--35 align-items-center">
              <div className="col-lg-5 visibleOverParticles">
                <div className="thumbnail">
                  <img className="w-100" src={myAvatar} alt="My Name" />
                </div>
              </div>
              <div className="col-lg-7 visibleOverParticles">
                <div className="about-inner inner">
                  <div className="section-title">
                    <a href="/about"><h2 className="title">{title}</h2></a>
                    <p className="description">
                      {subtitle}
                      <br />
                      {description}
                    </p>
                  </div>
                  <div className="row mt--30">
                    <HomeTabs />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About
