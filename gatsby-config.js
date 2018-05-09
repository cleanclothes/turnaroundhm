module.exports = {
  siteMetadata: {
    title: "Turn Around H&M",
    author: "Clean Clothes Campaign",
    description: "Let's make sure H&M starts paying a living wage",
    siteUrl: `https://turnaroundhm.org`
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
              linkImagesToOriginal: false,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
                width: 800,
                ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
                // height: 400, // Optional: Overrides optional.ratio
                related: false //Optional: Will remove related videos from the end of an embedded YouTube video.
            },
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-copy-images",
          "gatsby-remark-responsive-iframe",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ],
}
