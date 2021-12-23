import React from 'react'
import { Helmet, HelmetProvider, HelmetData } from 'react-helmet-async';

const helmetData = new HelmetData({});

export default function ReactHelmet({pageTitle, url}) {
    return (
        <React.Fragment>
     <Helmet helmetData={helmetData}>
                <title>{pageTitle ? pageTitle : "Developer Portfolio"}</title>
                <link rel="canonical" href={url ? url : "sample.com"} />
      </Helmet>
        </React.Fragment>
    )
}
