import React from "react"
import CustomCarousel from "../components/custom-carousel"
import { graphql, useStaticQuery } from "gatsby"

import OverviewSection1 from "../components/carousel-item/overview-section1"
import OverviewSection2 from "../components/carousel-item/overview-section2"
import OverviewSection3 from "../components/carousel-item/overview-section3"

const resolutions = {
  all: {
    breakpoint: { max: 6000, min: 0 },
    items: 1
  }
}

const OverviewSection = () => {
  const data = useStaticQuery(graphql`
      query {
          image1: file(relativePath: {eq: "images/home/overview-image1.jpg"}) {
              childImageSharp {
                  fixed(quality: 90, width: 570) {
                      ...GatsbyImageSharpFixed_tracedSVG
                  }
              }
          }

          image2: file(relativePath: {eq: "images/home/overview-image2.jpg"}) {
              childImageSharp {
                  fixed(quality: 90, width: 570) {
                      ...GatsbyImageSharpFixed_tracedSVG
                  }
              }
          }

          image3: file(relativePath: {eq: "images/home/overview-image3.jpg"}) {
              childImageSharp {
                  fixed(quality: 90, width: 570) {
                      ...GatsbyImageSharpFixed_tracedSVG
                  }
              }
          }
      }`
  )

  return (
    <section className="cmb-xsm-4 cmb-md-6 cmb-8 cmt-xsm-4 cmt-md-6 cmt-8">
      <div className="container">
        <h2 className="section-header">Okna, drzwi, rolety, bramy - Myślenice</h2>

        <CustomCarousel responsive={resolutions}>
          <OverviewSection1 image={data.image1}/>
          <OverviewSection2 image={data.image2}/>
          <OverviewSection3 image={data.image3}/>
        </CustomCarousel>
      </div>
    </section>
  )
}

export default OverviewSection
