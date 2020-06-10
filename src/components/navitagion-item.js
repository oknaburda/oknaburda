import React from "react"
import { Link } from "gatsby"

const NavigationItem = ({ url, title }) => (
  <li>
    <Link
      className=""
      to={url}
      title={title}
    >{title}
    </Link>
  </li>
)

export default NavigationItem
