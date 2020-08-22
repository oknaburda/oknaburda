import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import WrapRootElement from "../../gatsby-browser"
import Header from "./header"
import Footer from "./footer"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)

  return (
    <WrapRootElement>
      <Header siteTitle={data.site.siteMetadata.title}/>
      <main>{children}</main>
      <Footer/>
    </WrapRootElement>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
