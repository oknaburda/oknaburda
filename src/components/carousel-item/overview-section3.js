import React from "react"
import GatsbyImage from "gatsby-image"
import { Link } from "gatsby"

const OverviewSection3 = ({image}) => (
  <div className="col-12">
    <div className="row">
      <div className="col-12 col-md-4 col-lg-6">
        <GatsbyImage
          className="overview__image"
          fixed={image.childImageSharp.fixed}
        />
      </div>
      <div className="col-12 col-md-8 col-lg-6 overview__column">
        <h3 className="sub-header">Jakość i technologia</h3>
        <p className="text cmb-2">Posiadane przez nas produkty w ofercie, to zaawansowane technologicznie materiały, nowoczesne
          procesy produkcji oraz bogate doświadczenie, poparte satysfakcją naszych Klientów.</p>
        <p className="text text--bold">Gwarancja na drzwi, okna i inne produkty</p>
        <p className="text cmb-2">Naszym Klientom oferujemy kompleksowe
          rozwiązania, na które udzielamy gwarancji!</p>
        <p className="text text--bold">Walory estetyczne</p>
        <p className="text cmb-2">Wysokie walory estetyczne naszych produktów są efektem wysokiej
          jakości produkcji znanych na rynku.</p>
        <Link
          to="/galeria"
          title="Zobacz galerię zdjęć"
          className="link link--accent">Zobacz galerię zdjęć</Link>
      </div>
    </div>
  </div>
)

export default OverviewSection3
