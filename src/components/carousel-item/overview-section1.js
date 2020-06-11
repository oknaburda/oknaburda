import React from "react"
import GatsbyImage from "gatsby-image"
import { Link } from "gatsby"

const OverviewSection1 = ({ image }) => (
  <div className="col-12">
    <div className="row">
      <div className="col-12 col-md-7 col-lg-6">
        <GatsbyImage
          className="overview__image"
          fixed={image.childImageSharp.fixed}
        />
      </div>
      <div className="col-12 col-md-5 col-lg-6 overview__column">
        <h3 className="sub-header">Nasza misja</h3>
        <p className="text cmb-2">Okna Myślenice, drzwi i rolety to priorytet naszego rozwoju. Nasza firma działa na
          rynku od 2001
          roku, świadczymy usługi w zakresie sprzedaży oraz montażu okien, drzwi i bram garażowych.</p>
        <p className="text text--bold cmb-2">W ofercie posiadamy pełny asortyment okien, drzwi, ościeżnic, bram,
          parapetów, żaluzji znanych na
          rynku producentów w danej branży.</p>
        <Link
          to="/oferta"
          title="Zobacz naszą ofertę"
          className="link link--accent">Zobacz naszą ofertę</Link>
      </div>
    </div>
  </div>
)

export default OverviewSection1
