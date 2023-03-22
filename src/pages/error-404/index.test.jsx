import React from 'react'
import { expect, it } from 'vitest'
import Error404 from '.'

it('renders snapshot of blog details page', () => {
  expect(<Error404 />).toMatchSnapshot()
})
