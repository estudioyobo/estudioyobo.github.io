/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");
const slash = require("slash");
const _ = require("lodash");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(
      `src/templates/template-work-page.js`
    );
    const tagPagesTemplate = path.resolve(`src/templates/template-tag-page.js`);
    graphql(
      `
        {
          allMarkdownRemark(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  tags
                  title
                  hide
                }
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors);
      }

      // Create blog posts pages.
      const posts = result.data.allMarkdownRemark.edges.filter(
        edge => !edge.node.frontmatter.hide
      );

      posts.forEach(({ node }, index) => {
        const prev = index === 0 ? false : posts[index - 1].node;
        const next = index === posts.length - 1 ? false : posts[index + 1].node;
        createPage({
          path: node.fields.slug, // required
          component: slash(blogPostTemplate),
          context: {
            slug: node.fields.slug,
            highlight: node.frontmatter.highlight,
            shadow: node.frontmatter.shadow,
            prev,
            next
          },
          layout: "work"
        });
      });

      // // Create tag pages.
      // let tags = [];
      // result.data.allMarkdownRemark.edges.forEach(edge => {
      //   if (_.get(edge, `node.frontmatter.tags`)) {
      //     tags = tags.concat(edge.node.frontmatter.tags);
      //   }
      // });
      // tags = _.uniq(tags);
      // tags.forEach(tag => {
      //   const tagPath = `/tags/${_.kebabCase(tag)}/`;
      //   createPage({
      //     path: tagPath,
      //     component: tagPagesTemplate,
      //     context: {
      //       tag
      //     }
      //   });
      // });

      resolve();
    });
  });
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `File`) {
    const parsedFilePath = path.parse(node.absolutePath);
    const slug = `work/${node.relativeDirectory}`;
    createNodeField({ node, name: `slug`, value: slug });
  } else if (
    node.internal.type === `MarkdownRemark` &&
    typeof node.slug === `undefined`
  ) {
    const fileNode = getNode(node.parent);
    createNodeField({
      node,
      name: `slug`,
      value: fileNode.fields.slug
    });

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(
        tag => `/tags/${_.kebabCase(tag)}/`
      );
      createNodeField({ node, name: `tagSlugs`, value: tagSlugs });
    }
  }
};

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    if (page.path.match(/^\/services/)) {
      // It's assumed that `landingPage.js` exists in the `/layouts/` directory
      page.layout = "services";

      // Update the page.
      createPage(page);
    }

    resolve();
  });
};
