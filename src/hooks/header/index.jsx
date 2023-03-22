/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react'

import { useLocation } from 'react-router-dom'
import Links from './links'
import { configureHeader, cleanUpHeader } from './sticky-header'

const HeaderContext = React.createContext()
const HeaderProvider = ({ children }) => {
  const location = useLocation()
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

const useHeader = () => React.useContext(HeaderContext)

export { HeaderProvider, HeaderContext, useHeader }
