import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Kontakt" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
