import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import OverviewSection from "../templates/overview-section"
import MainHero from "../templates/main-hero"
import OfferGallerySection from "../templates/offer-gallery-section"
import OurSuccessesSection from "../templates/our-successes-section"
import LocationSection from "../templates/locations-section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <MainHero/>
    <OverviewSection/>
    <OfferGallerySection/>
    <OurSuccessesSection/>
    <LocationSection/>
  </Layout>
)

export default IndexPage
