import React from "react"
import Navigation from "./navigation"

const Header = () => (
  <header>
    <div className="container">
      <h2>
        Zadzwoń do nas!
        <a href="tel:+48601530589" title="+48 601 530 589">+48 601 530 589</a> /
        <a href="tel:+48122741003" title="+48 12 274 10 03">+48 12 274 10 03</a>
      </h2>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-auto">Logo</div>
        <Navigation/>
      </div>
    </div>
  </header>
)

export default Header
