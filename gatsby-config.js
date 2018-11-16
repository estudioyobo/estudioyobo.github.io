module.exports = {
  siteMetadata: {
    title: "Estudio Yobo | Diseño gráfico y desarrollo"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-123277798-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true
        // Avoids sending pageview hits from custom paths
      }
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Montserrat:200,400,500,600,800", "Crimson Text:400i,600i"]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/work`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/static/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          // {
          //   resolve: "gatsby-remark-images",
          //   options: {
          //     quality: 100,
          //     withWebp: true
          //   }
          // },
          {
            resolve: "gatsby-remark-component",
            options: { components: ["zoom-image", "hidden"] }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: { ignoreFileExtensions: [] }
          }
        ]
      }
    }
  ]
};
