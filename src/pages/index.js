import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import OverviewSection from "../templates/overview-section"
import MainHero from "../templates/main-hero"
import OfferSection from "../templates/offer-gallery-section"
import OurSuccessesSection from "../templates/our-successes-section"
import ContactFormSection from "../templates/contact-form-section"
import LocationSection from "../templates/locations-section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <MainHero/>
    <OverviewSection/>
    <OfferSection/>
    <OurSuccessesSection/>
    <ContactFormSection/>
    <LocationSection/>
  </Layout>
)

export default IndexPage
