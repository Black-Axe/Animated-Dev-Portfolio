import React, { useEffect, useState } from 'react'

import { FiClock, FiChevronUp } from 'react-icons/fi'
import { GiRobotAntennas } from 'react-icons/gi'

import ScrollToTop from 'react-scroll-up'

import { useNavigate, useLocation, useParams } from 'react-router-dom'

import { sanitize } from 'isomorphic-dompurify'
import Header from '../header/InnerHeader'
import Footer from '../footer/Footer'
import Particles from '../particles/Particles'
import Helmet from '../common/Helmet'

const BlogDetails = ({ match, data }) => {
  const { blogSlug } = useParams()
  const [postFromSlug, setPostFromSlug] = useState({
    title: {
      rendered: 'sampleTitle'
    },
    content: {
      rendered: '<p>Sample Content</p>'

    },
    author: 'author'
  })

  // used for the seo page title of the page, not the header title
  const [pageTitle, setPageTitle] = useState('')

  const [articleTitle, setArticleTitle] = useState('')

  const [convertedDate, setConvertedDate] = useState('')

  const [content, setContent] = useState('')

  const [author, setAuthor] = useState('')

  const dateConverter = (date) => new Date(date).toLocaleDateString()

  const titleStrip = (title) => title.replace(/[^a-zA-Z]/g, '')

  useEffect(() => {
    async function getPostBySlug() {
      // for sample data
      console.log(blogSlug)
      setPageTitle(blogSlug)
      setArticleTitle(blogSlug)
      setConvertedDate(dateConverter(Date.now()))
      setContent(sanitize(postFromSlug.content.rendered))
      setAuthor(postFromSlug.author)
      /*
            const response = await fetch(fetchUrl);
            if(!response.ok){
                return;
            }
            */

      // using dummy data
      const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await resp.json()
      const randomPost = posts[Math.floor(Math.random() * posts.length)]
      setContent(sanitize(randomPost.body))
    }
    getPostBySlug()

    // cleanup
    return () => {
      setPostFromSlug({})
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (

    <>
      <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

      <Helmet pageTitle={pageTitle || ' Article'} />

      {/* Start Breadcrump Area */}
      <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7" data-black-overlay="7">
        <div className="frame-layout__particles">
          <Particles />

        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-single-page-title text-center pt--100">
                <h2
                  className="title article-title"
                  dangerouslySetInnerHTML={
                                    { __html: sanitize(articleTitle || 'invalid title') }
                                    }
                />
                <ul className="blog-meta d-flex justify-content-center align-items-center">
                  <li>
                    <FiClock />
                    <span className="author-glitched" data-text={convertedDate || ''}>{convertedDate}</span>
                  </li>
                  <li>
                    <GiRobotAntennas />
                    <span className="author-glitched" data-text={author}>{author}</span>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Blog Details */}
      <div className="rn-blog-details pt--110 pb--70 bg_color--1">
        <div className="container">
          <div className="row visibleOverParticles">
            <div className="col-lg-12 visibleOverParticles">
              <div className="inner-wrapper visibleOverParticles blog-content-white">
                <div
                  className="inner visibleOverParticles"
                  dangerouslySetInnerHTML={{
                    __html: sanitize(
                      content || 'invalid content'
                    )
                  }}
                />

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />

    </>

  )
}
export default BlogDetails
