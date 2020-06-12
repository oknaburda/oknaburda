import React from "react"
import { Link } from "gatsby"
import GatsbyImage from "gatsby-image"

const OfferItem = ({ name, description, url, image }) => (
  <div className="offer-item__offset" style={{ margin: "0 16px" }}>
    <div className="offer-item">
      <GatsbyImage
        className="offer-item__image"
        fixed={image.childImageSharp.fixed}
      />

      <div className="offer-item__title-content">
        <h3 className="offer-item__header offer-item__header--accent">{name}</h3>
      </div>
      <div className="offer-item__description-content">
        <h3 className="offer-item__header cmb-1">{name}</h3>
        {description && <p className="text text--white text--overflow">{description}</p>}
        {url && (
          <Link
            to={url}
            title="Zobacz więcej"
            className="link link--accent link--white cmt-3"
          >Zobacz więcej</Link>
        )}
      </div>
    </div>
  </div>
)

export default OfferItem
