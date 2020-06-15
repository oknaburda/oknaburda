import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import OfferItem from "../components/offer-item"
import CustomDots from "../components/custom-dots"
import CustomCarousel from "../components/custom-carousel"

import { resolutions } from "../utils/resolutions"

const carouselOptions = {
  containerClass: "row cmt-5",
  dotListClass: "col-12 custom-carousel__dots custom-carousel__dots--hide-xl cmt-xsm-3 cmt-md-4 cmt-5",
  focusOnSelect: false,
  minimumTouchDrag: 80,
  showDots: true,
  arrows: false,
  customDot: <CustomDots/>,
  autoPlay: true,
  autoPlaySpeed: 10000,
  infinite: true,
  responsive: resolutions
}


const OfferSection = () => {
  const data = useStaticQuery(graphql`
      query {
          image1: file(relativePath: {eq: "images/home/okna.jpg"}) {
              childImageSharp {
                  fixed(quality: 90, width: 350) {
                      ...GatsbyImageSharpFixed_tracedSVG
                  }
              }
          }

          image2: file(relativePath: {eq: "images/home/drzwi.jpg"}) {
              childImageSharp {
                  fixed(quality: 90, width: 350) {
                      ...GatsbyImageSharpFixed_tracedSVG
                  }
              }
          }

          image3: file(relativePath: {eq: "images/home/rolety-zaluzje-moskitiery.jpg"}) {
              childImageSharp {
                  fixed(quality: 90, width: 350) {
                      ...GatsbyImageSharpFixed_tracedSVG
                  }
              }
          }

          image4: file(relativePath: {eq: "images/home/bramy-garazowe.jpg"}) {
              childImageSharp {
                  fixed(quality: 90, width: 350) {
                      ...GatsbyImageSharpFixed_tracedSVG
                  }
              }
          }

          image5: file(relativePath: {eq: "images/home/parapety.jpg"}) {
              childImageSharp {
                  fixed(quality: 90, width: 350) {
                      ...GatsbyImageSharpFixed_tracedSVG
                  }
              }
          }
      }`
  )

  const offerItems = [
    {
      name: "Okna",
      description: "",
      image: data.image1,
      url: ""
    },
    {
      name: "Drzwi",
      description: "",
      image: data.image2,
      url: ""
    },
    {
      name: "Rolety, żaluzje, moskitiery",
      description: "",
      image: data.image3,
      url: ""
    },
    {
      name: "Bramy garażowe",
      description: "",
      image: data.image4,
      url: ""
    },
    {
      name: "Parapety zewnętrzne i wewnętrzne",
      description: "",
      image: data.image5,
      url: ""
    }
  ].map(item => <OfferItem key={item.name} {...item} />)

  return (
    <section className="cmb-xsm-6 cmb-md-8 cmb-10 cmt-md-1 cmt-2">
      <div className="container">
        <h2 className="section-header cmb-2">Oferta</h2>
        <p>W naszej ofercie znajdziecie następujące produkty:</p>
      </div>

      <div className="container-fluid offer-item__slider">
        <CustomCarousel carouselOptions={carouselOptions}>
          {offerItems}
        </CustomCarousel>
      </div>
    </section>
  )
}

export default OfferSection
