module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Centrum Stolarki Okiennej Krzysztof Burda`,
    description: `Firma świadcząca usługi w zakresie sprzedaży oraz pełnego montażu okien, drzwi, bram, żaluzji, parapetów, schodów strychowych.`,
    author: `Paweł Kotoniak`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `okna-burda`,
        short_name: `okna-burda`,
        lang: `pl`,
        start_url: `/`,
        background_color: `#263141`,
        theme_color: `#263141`,
        display: `minimal-ui`,
        icon: `src/assets/icons/logo.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
