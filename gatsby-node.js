/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/about-2",
    toPath: "/about",
    isPermanent: true,
    force: true,
  })

  createRedirect({
    fromPath: "/about-1",
    toPath: "/about",
    isPermanent: true,
    force: true,
  })

  createRedirect({
    fromPath: "/about-all",
    toPath: "/about",
    statusCode: 200,
  })
}
