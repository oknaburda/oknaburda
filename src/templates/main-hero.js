import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import GatsbyImage from "gatsby-image"

const MainHero = () => {
  const data = useStaticQuery(graphql`
      query {
          file(name: {eq: "hero-image"}) {
              name
              childImageSharp {
                  fixed(height: 700) {
                      ...GatsbyImageSharpFixed_tracedSVG
                  }
              }
          }
      }`
  )

  return (
    <header>
      <div className="main-hero">
        <GatsbyImage
          className="main-hero__background"
          fixed={data.file.childImageSharp.fixed}
        />
        <div className="main-hero__content">
          <h1 className="main-header">Centrum Stolarki Okiennej <span
            className="main-header--accent main-header--block">Krzysztof Burda</span></h1>
          <div className="main-hero__links-wrapper">
            <Link
              to="/oferta"
              title="Sprawdź ofertę"
              className="button button--accent">Sprawdź ofertę</Link>
            <Link
              to="/kontakt"
              title="Skontaktuj się"
              className="button button--light cmt-sm-2">Skontaktuj się</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHero
