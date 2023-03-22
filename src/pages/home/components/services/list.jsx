import { GrAppleAppStore, GrReactjs } from 'react-icons/gr'
import { BsTerminal } from 'react-icons/bs'
import { GiTeacher } from 'react-icons/gi'
import React from 'react'

const list = [
  {
    icon: <GrReactjs />,
    title: 'Web App Development',
    description: 'Full Stack Web Application Development using a wide range of tools.'
  },

  {
    icon: <GrAppleAppStore />,
    title: 'App Development',
    description: 'Simple cross-platform mobile application development using the versatile React Native framework.'
  },

  {
    icon: <BsTerminal />,
    title: 'Software Development',
    description: 'Software development in several programming languages including but not limited to: Python, Java, TypeScript.'
  },
  {
    icon: <GiTeacher />,
    title: 'Consulting & Tutoring',
    description: 'Capable of working on any web or mobile project. Can also aid any student in beginner and advanced computer science studies.'
  }
]

export default list
