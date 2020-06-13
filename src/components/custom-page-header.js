import React from "react"
import GatsbyImage from "gatsby-image"


const CustomPageHeader = ({ image, pageTitle }) => (
  <header className="custom-page-header">
    <GatsbyImage
      className="custom-page-header__image"
      fixed={image.childImageSharp.fixed}
    />
    <div className="container" style={{height: "100%"}}>
      <div className="custom-page-header__title-wrapper">
        <h1 className="custom-page-header__title">{pageTitle}</h1>
      </div>
    </div>
  </header>
)

export default CustomPageHeader
