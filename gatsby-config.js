module.exports = {
  siteMetadata: {
    title: "Yobo"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Montserrat:200,500,700"]
      }
    }
  ]
};
