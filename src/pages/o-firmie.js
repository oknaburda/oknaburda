import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import CustomPageHeader from "../components/custom-page-header"
import GatsbyImage from "gatsby-image"
import LocationSection from "../templates/locations-section"
import { getCurrentYear } from "../utils/getCurrentYear"

const AboutCompany = () => {
  const data = useStaticQuery(graphql`
      query {
          header: file(absolutePath: {regex: "/assets/images/about-company/header.jpg/"}) {
              name
              childImageSharp {
                  fixed(quality: 90, height: 500) {
                      ...GatsbyImageSharpFixed_tracedSVG
                  }
              }
          }

          image1: file(absolutePath: {regex: "/assets/images/about-company/image1.jpg/"}) {
              name
              childImageSharp {
                  fixed(quality: 90, width: 570) {
                      ...GatsbyImageSharpFixed_tracedSVG
                  }
              }
          }
      }`
  )

  return (
    <Layout>
      <SEO title="O firmie"/>
      <CustomPageHeader image={data.header} pageTitle="O firmie"/>

      <div className="container">
        <div className="row cmt-8 cmb-8 cmt-md-6 cmb-md-6">
          <div className="col-12 col-md-7 col-lg-6 overview__column overview__column--left">
            <h3 className="sub-header">Zapraszamy do Myślenic!</h3>
            <p className="text text--bold cmb-2">Szanowni Państwo, od {getCurrentYear(2001)} lat świadczymy usługi w zakresie sprzedaży oraz
              pełnego montażu okien, drzwi, bram, żaluzji, parapetów, schodów strychowych. Serdecznie zapraszamy do
              zapoznania się z zakresem naszej oferty.</p>

            <p className="text cmb-2">Mamy nadzieję, że nasza internetowa prezentacja okaże się dla Państwa
              interesującym miejscem, gdzie znajdą Państwo potrzebne dla siebie informacje, skłaniające do odwiedzenia
              naszego biura sprzedaży lub zamówienia wizyty pomiarowej.</p>

            <p className="text text--bold cmb-2">Jesteśmy do Państwa dyspozycji</p>
            <p className="text text cmb-2">Jeżeli mają Państwo jakieś pytania lub pragną uzyskać więcej informacji,
              prosimy do nas napisać, zadzwonić lub odwiedzić nasze biuro sprzedaży w Myślenicach przy ul. 3 go Maja
              14c.</p>

            <p className="text text--bold">Serdecznie zapraszamy!</p>
          </div>
          <div className="col-12 col-md-5 col-lg-6">
            <GatsbyImage
              className="overview__image"
              fixed={data.image1.childImageSharp.fixed}
            />
          </div>
        </div>
      </div>

      <LocationSection/>
    </Layout>
  )
}

export default AboutCompany
