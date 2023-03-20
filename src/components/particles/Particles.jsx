import React from 'react'
import Particles from 'react-tsparticles'

import options from './options'

export default function ReactParticles() {
  return (

    <Particles
      className="particles"
      options={options}
    />
  )
}

export const ReactFormParticles = () => (
  <div className="particlesRelative">
    <Particles
      className="formParticles"
      options={options}
    />
  </div>
)
