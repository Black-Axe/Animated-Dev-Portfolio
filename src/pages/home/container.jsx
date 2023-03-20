/* eslint-disable react/prop-types */
import React from 'react'
import Helmet from '../../components/common/Helmet'
import Particles from '../../components/particles/Particles'

const HomeContainer = (props) => {
  const { children } = props

  return (

    <div>
      <Helmet />
      <div className="active-dark">

        <Particles />

        {children}
      </div>
    </div>
  )
}
export default HomeContainer
