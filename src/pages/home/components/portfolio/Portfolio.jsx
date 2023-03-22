/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { GiMagnifyingGlass } from 'react-icons/gi'
import Dialog from '@mui/material/Dialog'
import { useTheme } from '@mui/material/styles'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import Grid from '@mui/material/Grid'
import projectConfig from './config'

const bannerImage = 'https://raw.githubusercontent.com/elsowiny/DigitalAssets/master/oss.png'
const GHLink = 'github.com'

let projects = projectConfig
const styevariation = 'text-center mt--40'
const column = 'col-lg-4 col-md-6 col-sm-6 col-12'

const Portfolio = ({ displayCount }) => {
  projects = projects?.slice(0, displayCount)

  const [open, setOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  function onProjectClick(project) {
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
                <div className={`${column}`} key={index}>
                  <div className={`portfolio ${styevariation}`}>
                    {
                                                value?.openSource
                                                  ? (
                                                    <div className="banner-image">
                                                      <img src={bannerImage} alt="decorative banner illustration" />
                                                    </div>
                                                  )
                                                  : ''
                                            }

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
                            onClick={
                                                                () => {
                                                                  onProjectClick(value)
                                                                }
                                                            }
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
      <Dialog
        fullScreen={fullScreen}
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        scroll="body"
        className="portfolio-modal-elsowiny"
      >

        <Grid sx={{ mb: 3 }} item xs={12} align="center">
          {selectedProject?.title}
        </Grid>
        <Grid sx={{ mt: 5 }} item xs={12} align="center">
          <div className="special-description-box cover-special">
            <img src={selectedProject?.projectCoverImage} alt="project" className="cvrimg_" />
          </div>
        </Grid>

        <div>
          <div className="special-description-box">
            <Grid container spacing={3}>

              <Grid item xs={3} sm={3}>

                <p className="blueify subprojtitle">Details: </p>
                <p className="proj-cat">
                  <span className="blueify">Project Title: </span>
                  {' '}
                  {selectedProject?.title}

                </p>
                <p className="proj-cat">
                  <span className="blueify">Category: </span>
                  {' '}
                  {selectedProject?.category}
                </p>
                <p className="proj-cat">
                  <span className="blueify">Technologies: </span>
                  {selectedProject?.tech}
                </p>
                <p className="proj-cat">
                  <span className="blueify">Project Link: </span>
                  <a className="whitefy" href={selectedProject?.link} target="_blank" rel="noopener noreferrer">Visit</a>
                </p>
                <p className="proj-cat">
                  <span className="blueify">GitHub: </span>
                  <a className="whitefy" href={selectedProject?.github} target="_blank" rel="noopener noreferrer">Visit</a>

                </p>

              </Grid>

              <Grid item xs={5} sm={5}>
                <div>
                  <p className="blueify subprojtitle">Description: </p>
                  <p className="proj-desc">
                    {selectedProject?.description}
                  </p>
                </div>
              </Grid>
              <Grid item xs sm>

                <img src={selectedProject?.projectImage} alt="project demo one" className="project-dialog-image proj-image" />

              </Grid>

            </Grid>
          </div>
          <div className="special-description-box">
            <Grid container spacing={3}>
              <Grid item sx={{ mt: 3, mb: 5 }}>
                <img src={selectedProject?.projectImageTwo} alt="project demo two" className="project-dialog-image proj-image-two" />
              </Grid>

            </Grid>
          </div>

        </div>

        <DialogActions className="dialog-close-elsowiny">
          <Button onClick={handleClose}>
            <span className="close-button-port">Close</span>

          </Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default Portfolio
