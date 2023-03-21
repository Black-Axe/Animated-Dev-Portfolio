import React from 'react'
import ScrollToTop from 'react-scroll-up'
import { FiChevronUp } from 'react-icons/fi'

const ScrollIcon = () => (

  <div className="backto-top">
    <ScrollToTop showUnder={160}>
      <FiChevronUp />
    </ScrollToTop>
  </div>

)

export default ScrollIcon
