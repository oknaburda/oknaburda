import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import CustomPageHeader from "../components/custom-page-header"

import LocationSection from "../templates/locations-section"
import CustomGalleryRow from "../components/custom-gallery-row"


const Gallery = () => {
  const data = useStaticQuery(graphql`
      query {
          header: file(absolutePath: {regex: "/assets/images/gallery/header.jpg/"}) {
              name
              childImageSharp {
                  fixed(quality: 90, height: 500) {
                      ...GatsbyImageSharpFixed_tracedSVG
                  }
              }
          }

          category1: allFile(filter: {absolutePath: {regex: "/gallery/category1/"}}) {
              edges {
                  node {
                      image: childImageSharp {
                          fullImages: fixed(quality: 90, height: 1280) {
                              ...GatsbyImageSharpFixed_tracedSVG
                          }
                      }
                  }
              }
          }

          category2: allFile(filter: {absolutePath: {regex: "/gallery/category2/"}}) {
              edges {
                  node {
                      image: childImageSharp {
                          fullImages: fixed(quality: 90, height: 1280) {
                              ...GatsbyImageSharpFixed_tracedSVG
                          }
                      }
                  }
              }
          }

          category3: allFile(filter: {absolutePath: {regex: "/gallery/category3/"}}) {
              edges {
                  node {
                      image: childImageSharp {
                          fullImages: fixed(quality: 90, height: 1280) {
                              ...GatsbyImageSharpFixed_tracedSVG
                          }
                      }
                  }
              }
          }

          category4: allFile(filter: {absolutePath: {regex: "/gallery/category4/"}}) {
              edges {
                  node {
                      image: childImageSharp {
                          fullImages: fixed(quality: 90, height: 1280) {
                              ...GatsbyImageSharpFixed_tracedSVG
                          }
                      }
                  }
              }
          }

          category5: allFile(filter: {absolutePath: {regex: "/gallery/category5/"}}) {
              edges {
                  node {
                      image: childImageSharp {
                          fullImages: fixed(quality: 90, height: 1280) {
                              ...GatsbyImageSharpFixed_tracedSVG
                          }
                      }
                  }
              }
          }
      }`
  )

  const categoriesRows = [
    {
      title: "Drzwi wewnętrzne",
      images: data.category1.edges.map(item => item.node.image)
    },
    {
      title: "Okna",
      images: data.category2.edges.map(item => item.node.image)
    },
    {
      title: "Plisy",
      images: data.category3.edges.map(item => item.node.image)
    },
    {
      title: "Rolety",
      images: data.category4.edges.map(item => item.node.image)
    },
    {
      title: "Żaluzje",
      images: data.category5.edges.map(item => item.node.image)
    }
  ].map(item => (
    <CustomGalleryRow key={item.title} {...item}/>
  ))

  return (
    <Layout>
      <SEO title="Galeria"/>
      <CustomPageHeader image={data.header} pageTitle="Galeria"/>

      <div className="cmt-xsm-4 cmt-md-6 cmt-8">
        {categoriesRows}
      </div>

      <LocationSection/>
    </Layout>
  )
}

export default Gallery
