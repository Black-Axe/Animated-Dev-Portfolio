/* eslint-disable react/prop-types */
import React, { } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

const ProjectModal = ({
  selectedProject,
  handleClose,
  open,
  fullScreen
}) => {
  if (!selectedProject) return null
  const {
    title, projectCoverImage, category, tech, link, description, github,
    projectImage, projectImageTwo
  } = selectedProject
  return (

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
        {title}
      </Grid>
      <Grid sx={{ mt: 5 }} item xs={12} align="center">
        <div className="special-description-box cover-special">
          <img src={projectCoverImage} alt="project" className="cvrimg_" />
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
                {title}

              </p>
              <p className="proj-cat">
                <span className="blueify">Category: </span>
                {' '}
                {category}
              </p>
              <p className="proj-cat">
                <span className="blueify">Technologies: </span>
                {tech}
              </p>
              <p className="proj-cat">
                <span className="blueify">Project Link: </span>
                <a className="whitefy" href={link} target="_blank" rel="noopener noreferrer">Visit</a>
              </p>
              <p className="proj-cat">
                <span className="blueify">GitHub: </span>
                <a className="whitefy" href={github} target="_blank" rel="noopener noreferrer">Visit</a>

              </p>

            </Grid>

            <Grid item xs={5} sm={5}>
              <div>
                <p className="blueify subprojtitle">Description: </p>
                <p className="proj-desc">
                  {description}
                </p>
              </div>
            </Grid>
            <Grid item xs sm>

              <img src={projectImage} alt="project demo one" className="project-dialog-image proj-image" />

            </Grid>

          </Grid>
        </div>
        <div className="special-description-box">
          <Grid container spacing={3}>
            <Grid item sx={{ mt: 3, mb: 5 }}>
              <img src={projectImageTwo} alt="project demo two" className="project-dialog-image proj-image-two" />
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

  )
}

export default ProjectModal
