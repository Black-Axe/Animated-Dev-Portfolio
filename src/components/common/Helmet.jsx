import React from 'react'
import { Helmet, HelmetData } from 'react-helmet-async'

const helmetData = new HelmetData({})
// eslint-disable-next-line no-lone-blocks
{ /* seo content */ }
const ReactHelmet = ({ pageTitle, url }) => (
  <Helmet helmetData={helmetData}>
    <title>{pageTitle || 'Developer Portfolio'}</title>
    <link rel="canonical" href={url || 'sample.com'} />
  </Helmet>
)

export default ReactHelmet
