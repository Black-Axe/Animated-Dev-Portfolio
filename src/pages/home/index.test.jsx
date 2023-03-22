import React from 'react'
import { expect, it } from 'vitest'
import HomePage from '.'

it('renders snapshot of home page', () => {
  expect(<HomePage />).toMatchSnapshot()
})
