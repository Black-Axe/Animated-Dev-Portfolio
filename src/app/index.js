import React from 'react'
import {
  BrowserRouter, Routes, Route, Navigate
} from 'react-router-dom'
import HomePage from '../pages/Home'
import './App.css'
import Blog from '../components/blog'
import BlogDetails from '../components/blog/BlogDetails'
import Error404 from '../pages/Error404'

const App = () => (
  <BrowserRouter basename="/" element={<HomePage />}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/articles" element={<Blog />} />
      <Route path="/articles/:blogSlug" element={<BlogDetails />} />
      <Route path="/404" element={<Error404 />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  </BrowserRouter>
)

export default App
