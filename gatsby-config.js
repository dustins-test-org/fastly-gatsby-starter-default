module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        mergeSecurityHeaders: false,
        headers: {
          "/dashboard/previews/login": [],
        },
        // Some CMS Iframe Preview URLs.
        // When they have password protection or authentication required
        // the iframe is routed to the dashboard. We need to enable framing of this route
        transformHeaders: (headers, path) => {
          // clone
          const newHeaders = headers.slice(0)

          if (new RegExp("/dashboard/previews/login").test(path)) {
            return newHeaders
          }

          return [
            "X-Frame-Options: DENY",
            "X-XSS-Protection: 1; mode=block",
            "X-Content-Type-Options: nosniff",
            "Referrer-Policy: same-origin",
            ...newHeaders,
          ]
        },
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/dashboard/*`] },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
