import React from 'react'
import { expect, it } from 'vitest'
import App from './index'

it('renders snapshot of app', () => {
  expect(<App />).toMatchSnapshot()
})
