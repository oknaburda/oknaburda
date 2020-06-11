import React from "react"


const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__content">
        <p className="text text--bold">Copyright &copy; {new Date().getFullYear()} Wszelkie prawa zastrzeżone</p>
        <p className="text text--bold">
          Wykonane przez: <span className="text text--accent">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="link link--active link--white"
          >Wróbel</a>&
          <a
            href="https://www.linkedin.com/in/kotoniak/"
            target="_blank"
            rel="noreferrer"
            title="See linkedin profile"
            className="link link--active link--white"
          >Kotoniak</a>
        </span></p>
      </div>
    </div>
  </footer>
)

export default Footer
