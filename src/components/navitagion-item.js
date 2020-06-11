import React from "react"
import { Link } from "gatsby"

const NavigationItem = ({ url, title }) => (
  <li className="navigation-item">
    <Link
      className="link link--navigation"
      to={url}
      title={title}
      activeClassName="link--active"
    >{title}
    </Link>
  </li>
)

export default NavigationItem
