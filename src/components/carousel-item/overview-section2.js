import React from "react"
import GatsbyImage from "gatsby-image"


const OverviewSection2 = ({ image }) => (
  <div className="col-12">
    <div className="row">
      <div className="col-12 col-md-8 col-lg-7 overview__column overview__column--left order-last order-md-first">
        <h3 className="sub-header">Nie tylko okna i drzwi</h3>
        <p className="text cmb-2">Podstawową działalność handlowo-usługową prowadzimy w Myślenicach - jesteśmy jednak
          przygotowani na realizację zleceń z obszaru województwa małopolskiego.</p>
        <p className="text text--bold">Posiadamy szeroką ofertę:</p>
        <ul className="list">
          <li className="list__item">Okna PCV - Drewno - Aluminium</li>
          <li className="list__item">Drzwi wewnętrzne i zewnętrzne</li>
          <li className="list__item">Żaluzje</li>
          <li className="list__item">Rolety</li>
          <li className="list__item">Bramy garażowe</li>
          <li className="list__item">Parapety zewnętrzne i wewnętrzne (drewno, PCV, stal, aluminium, agglomarmur)</li>
          <li className="list__item">Pełna usługa montażowa</li>
        </ul>
      </div>
      <div className="col-12 col-md-4 col-lg-5 order-first order-md-last">
        <GatsbyImage
          className="overview__image"
          fixed={image.childImageSharp.fixed}
        />
      </div>
    </div>
  </div>
)

export default OverviewSection2
