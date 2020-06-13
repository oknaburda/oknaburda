import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import CustomPageHeader from "../components/custom-page-header"
import LocationSection from "../templates/locations-section"

const Gallery = () => {
  const data = useStaticQuery(graphql`
      query {
          header: file(absolutePath: {regex: "/assets/images/gallery/header.jpg/"}) {
              name
              childImageSharp {
                  fixed(quality: 90, height: 500) {
                      ...GatsbyImageSharpFixed_tracedSVG
                  }
              }
          }
      }`
  )

  return (
    <Layout>
      <SEO title="Galeria"/>
      <CustomPageHeader image={data.header} pageTitle="Galeria"/>

      <LocationSection/>
    </Layout>
  )
}

export default Gallery
