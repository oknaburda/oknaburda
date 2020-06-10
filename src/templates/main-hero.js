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
      }`)

  return (
    <header>
      <div className="main-hero">
        <GatsbyImage
          className=""
          fixed={data.file.childImageSharp.fixed}
        />
        <div>
          <h1>Centrum Stolarki Okiennej <span>Krzysztof Burda</span></h1>
          <div>
            <Link to="/oferta" title="Sprawdź ofertę">Sprawdź ofertę</Link>
            <Link to="/kontakt" title="Skontaktuj się">Skontaktuj się</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHero
