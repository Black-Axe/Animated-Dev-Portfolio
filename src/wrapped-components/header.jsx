import React from 'react'

import { HeaderProvider } from '../hooks/header'
import Header from '../components/header'

const WrappedHeader = () => (
  <HeaderProvider>
    <Header />
  </HeaderProvider>
)

export default WrappedHeader
