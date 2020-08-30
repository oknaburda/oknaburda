import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import CountUp from "react-countup"
import { getCurrentYear } from "../utils/getCurrentYear"


const OurSuccessesSection = () => {
  const data = useStaticQuery(graphql`
      query {
          image: file(relativePath: {eq: "images/home/our-successes.png"}) {
              childImageSharp {
                  fluid(quality: 90, maxWidth: 540, maxHeight: 560) {
                      ...GatsbyImageSharpFluid_tracedSVG
                  }
              }
          }
      }`
  )

  const years = getCurrentYear(2001)

  return (
    <section className="cmb-md-6 cmb-8">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7 col-lg-6 our-successes__column cpr-4">
            <h2 className="section-header cmb-2">Nasze osiągnięcia</h2>
            <p>Posiadane przez nas produkty w ofercie, to zaawansowane technologicznie materiały, nowooczesne procesy
              produkcji oraz bogate doświadczenie, poparte satysfakcją naszych Klientów.</p>

            <div className="row our-successes__counter cmt-xsm-4 cmt-md-5 cmt-6">
              <div className="col-6 col-sm-4">
                <p className="text our-successes__counter-number">
                  <CountUp
                    start={103}
                    end={5580}
                    duration={35}
                    delay={2}
                  />
                </p>
                <p>Wykonanych okien</p>
              </div>
              <div className="col-6 col-sm-4">
                <p className="text our-successes__counter-number">
                  <CountUp
                    start={0}
                    end={years}
                    duration={25}
                    delay={2}
                  />
                </p>
                <p>Lat doświadczeń</p>
              </div>
              <div className="col-sm-4 cmt-xsm-2">
                <p className="text our-successes__counter-number">
                  <CountUp
                    start={0}
                    end={1000}
                    duration={30}
                    delay={2}
                    suffix={"+"}
                  />
                </p>
                <p>Zadowolonych klientów</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-6">
            <GatsbyImage
              className="our-successes__image"
              fluid={data.image.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurSuccessesSection
