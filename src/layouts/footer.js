import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__content">
        <p className="text text--bold">Copyright &copy; {new Date().getFullYear()}</p>
        <p className="text text--bold">
          Wykonane przez: <span className="text text--accent">
          <Link
            to="/"
            target="_blank"
            className="link link--active"
          >Wróbel</Link>&
          <Link
            to="https://www.linkedin.com/in/kotoniak/"
            target="_blank"
            title="See linkedin profile"
            className="link link--active"
          >Kotoniak</Link>
        </span></p>
      </div>
    </div>
  </footer>
)

export default Footer
