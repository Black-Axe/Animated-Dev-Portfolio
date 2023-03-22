import React from 'react'
import { expect, it } from 'vitest'
import Blog from '.'

it('renders snapshot of blog page', () => {
  expect(<Blog />).toMatchSnapshot()
})
