import React from 'react'
import {
  BrowserRouter, Routes, Route, Navigate
} from 'react-router-dom'
import HomePage from '../pages/home/index'
import './App.css'
import Blog from '../pages/blog'
import BlogDetails from '../pages/blog-details'
import Error404 from '../pages/error-404'

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
