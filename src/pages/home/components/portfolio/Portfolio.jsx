/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { GiMagnifyingGlass } from 'react-icons/gi'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import rawProjects from './projects'
import ProjectModal from './project-modal'

const bannerImage = 'https://raw.githubusercontent.com/elsowiny/DigitalAssets/master/oss.png'
const GHLink = 'github.com'

const Portfolio = ({ displayCount }) => {
  const projects = rawProjects?.slice(0, displayCount)

  const [open, setOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const onProjectClick = (project) => {
    setSelectedProject(project)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(
    () => () => {
      setOpen(false)
      setSelectedProject(null)
    },
    []
  )

  return (

    <div id="portfolio" className="fix">
      <div className="portfolio-area ptb--120 bg_color--1">
        <div className="portfolio-sacousel-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 visibleOverParticles">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title">
                    My
                    {' '}
                    <span className="blueify">Laboratory</span>
                  </h2>
                  <p>
                    A sampling of some of the works I have
                    {' '}
                    <span className="blueify">brewed</span>
                    {' '}
                    up.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {projects?.map((value, index) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                  <div className="portfolio text-center mt--40">
                    {value?.openSource && (
                    <div className="banner-image">
                      <img src={bannerImage} alt="decorative banner illustration" />
                    </div>
                    )}
                    <div className="thumbnail-inner">
                      <div
                        className="thumbnail"
                        style={{ backgroundImage: `url("${value.image}")` }}
                      />
                    </div>
                    <div className="content">
                      <div className="innerPort">
                        <p>{value.category}</p>
                        <h4>{value.title}</h4>
                        <div className="portfolio-button">
                          <span
                            className="rn-btn white-buttn"
                            onClick={() => {
                              onProjectClick(value)
                            }}
                          >

                            Details
                            {' '}
                            <GiMagnifyingGlass />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-lg-12 visibleOverParticles">
                <div className="view-more-btn mt--60 mt_sm--30 text-center">
                  <a
                    className="rn-button-style--2 btn-solid"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={GHLink}
                  >
                    <span>View all on Github</span>

                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* dialog/modal */}
      <ProjectModal
        selectedProject={selectedProject}
        open={open}
        handleClose={handleClose}
        fullScreen={fullScreen}
      />

    </div>
  )
}

export default Portfolio
