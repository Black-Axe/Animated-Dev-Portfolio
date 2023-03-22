/* eslint-disable react/prop-types */
// forgot password provider

import React, { useEffect, useRef } from 'react'

import { useLocation } from 'react-router-dom'
import Links from './links'
import stickyHeader, { configureHeader, cleanUpHeader } from './sticky-header'

const HeaderContext = React.createContext()
const HeaderProvider = ({ children }) => {
  const location = useLocation()
  console.log('🚀 ~ file: use-header.jsx:17 ~ HeaderProvider ~ location:', location)
  const { pathname } = location
  const headerRef = useRef(null)

  useEffect(() => {
    configureHeader(headerRef)

    return () => {
      cleanUpHeader(headerRef)
    }
  }, [])

  const menuTrigger = () => {
    headerRef.current.classList.toggle('menu-open')
  }

  const closeMenuTrigger = () => {
    headerRef.current.classList.remove('menu-open')
  }

  const data = {
    headerRef,
    menuTrigger,
    closeMenuTrigger,
    Links: Links(pathname)
  }
  const memoized = React.useMemo(() => data, [data])
  return (
    <HeaderContext.Provider value={memoized}>
      {children}
    </HeaderContext.Provider>

  )
}

const useHeader = () => {
  const context = React.useContext(HeaderContext)

  return context
}

export { HeaderProvider, HeaderContext, useHeader }
