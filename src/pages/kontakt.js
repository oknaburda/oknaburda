import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import CustomPageHeader from "../components/custom-page-header"
import ContactFormSection from "../templates/contact-form-section"
import LocationSection from "../templates/locations-section"


const Contact = () => {
  const data = useStaticQuery(graphql`
      query {
          header: file(absolutePath: {regex: "/assets/images/contact/header.jpg/"}) {
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
      <SEO title="Kontakt" />
      <CustomPageHeader image={data.header} pageTitle="Kontakt"/>

      <LocationSection theme="location--light"/>
      <ContactFormSection/>
    </Layout>
  )
}

export default Contact
