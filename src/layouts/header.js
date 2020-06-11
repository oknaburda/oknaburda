import React from "react"
import Navigation from "./navigation"
import { graphql, useStaticQuery, Link } from "gatsby"
import GatsbyImage from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
      query {
          file(absolutePath: {regex: "/assets/images/logo.png/"}) {
              name
              childImageSharp {
                  fixed(quality: 90, height: 60) {
                      ...GatsbyImageSharpFixed_tracedSVG
                  }
              }
          }
      }`
  )

  return (
    <header>
      <div className="header__top-bar">
        <div className="container">
          <p className="text">
            <span className="header__text text--accent text--upper cmr-1">Zadzwoń do nas!</span>
            <a
              href="tel:+48601530589"
              title="+48 601 530 589"
              className="link">+48 601 530 589</a>
            <span className="cmr-1 cml-1">/</span>
            <a
              href="tel:+48122741003"
              title="+48 12 274 10 03"
              className="link">+48 12 274 10 03</a>
          </p>
        </div>
      </div>

      <div className="container">
        <div className="header__main-bar">
          <Link
            to="/"
            title="Strona główna"
            className="header__logo">
            <GatsbyImage
              className=""
              fixed={data.file.childImageSharp.fixed}
            />
          </Link>
          <Navigation/>
        </div>
      </div>
    </header>
  )
}

export default Header
