import React from "react"
import NavigationItem from "../components/navitagion-item"

const navigationItems = [
  { url: "/", title: "Start" },
  { url: "/o-firmie", title: "O firmie" },
  { url: "/oferta", title: "Oferta" },
  { url: "/galeria", title: "Galeria" },
  { url: "/kontakt", title: "Kontakt" }
].map((item, index) => <NavigationItem key={index} {...item} />)


const Navigation = () => (
  <nav className="navigation">
    <ul className="navigation__list">
      {navigationItems}
    </ul>
  </nav>
)

export default Navigation
