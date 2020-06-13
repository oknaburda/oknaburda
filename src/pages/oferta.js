import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import CustomPageHeader from "../components/custom-page-header"
import OfferSection from "../templates/offer-gallery-section"
import LocationSection from "../templates/locations-section"


const Offer = () => {
  const data = useStaticQuery(graphql`
      query {
          header: file(absolutePath: {regex: "/assets/images/offer/header.jpg/"}) {
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
      <SEO title="Oferta"/>
      <CustomPageHeader image={data.header} pageTitle="Oferta"/>

      <section className="cmt-8 cmb-8 cmt-md-6 cmb-md-6">
        <div className="container cmb-8 cmb-md-6">
          <p className="text text--bold cmb-2">Okna Myślenice, drzwi i rolety to priorytet naszego rozwoju. Nasza firma
            działa na
            rynku od 2001 roku, świadczymy usługi w zakresie sprzedaży oraz montażu okien, drzwi i bram garażowych.</p>
          <p className="text text cmb-2">W ofercie posiadamy pełny asortyment okien, drzwi, ościeżnic, bram,
            parapetów, żaluzji znanych na rynku producentów w danej branży.</p>

          <p className="text text--bold">Posiadamy szeroką ofertę:</p>
          <ul className="list">
            <li className="list__item">Okna PCV - Drewno - Aluminium</li>
            <li className="list__item">Drzwi wewnętrzne i zewnętrzne</li>
            <li className="list__item">Żaluzje</li>
            <li className="list__item">Rolety</li>
            <li className="list__item">Bramy garażowe</li>
            <li className="list__item">Parapety zewnętrzne i wewnętrzne (drewno, PCV, stal, aluminium, agglomarmur)</li>
            <li className="list__item">Okna dachowe i wyłaziowe</li>
            <li className="list__item">Schody strychowe</li>
            <li className="list__item">Pełna usługa montażowa</li>
          </ul>
        </div>

        <OfferSection/>

        <div className="container">
          <p className="text cmb-2">Posiadane przez nas produkty w ofercie, to zaawansowane technologicznie materiały,
            nowoczesne
            procesy produkcji oraz bogate doświadczenie, poparte satysfakcją naszych Klientów.</p>
          <p className="text text--bold">Gwarancja na drzwi, okna i inne produkty</p>
          <p className="text cmb-2">Naszym Klientom oferujemy kompleksowe
            rozwiązania, na które udzielamy gwarancji!</p>
          <p className="text text--bold">Walory estetyczne</p>
          <p className="text cmb-2">Wysokie walory estetyczne naszych produktów są efektem wysokiej
            jakości produkcji znanych na rynku.</p>
        </div>
      </section>

      <LocationSection/>
    </Layout>
  )
}

export default Offer
