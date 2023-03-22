import React from 'react'
import { expect, it } from 'vitest'
import BlogDets from '.'

it('renders snapshot of blog details page', () => {
  expect(<BlogDets />).toMatchSnapshot()
})
