import React from 'react'
import Helmet from '../../components/common/Helmet'

const HomeContainer = (props) => {
  const { children } = props

  return (

    <div>
      <Helmet />
      <div className="active-dark">
        {children}
      </div>
    </div>
  )
}
export default HomeContainer
