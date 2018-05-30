import path from "path";
import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import config from "../../config/info";

const getSchemaOrgJSONLD = ({
  isWork,
  url,
  title,
  image,
  description,
  datePublished
}) => {
  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url,
      name: title,
      alternateName: config.title
    }
  ];

  return isWork
    ? [
        ...schemaOrgJSONLD,
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": url,
                name: title,
                image
              }
            }
          ]
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          url,
          name: title,
          alternateName: config.title,
          headline: title,
          image: {
            "@type": "ImageObject",
            url: image
          },
          description,
          author: {
            "@type": "Organization",
            url: "https://estudioyobo.com",
            name: "Estudio Yobo"
          },
          publisher: {
            "@type": "Organization",
            url: "https://estudioyobo.com",
            logo: config.logo,
            name: "Estudio Yobo"
          },
          mainEntityOfPage: {
            "@type": "WebSite",
            "@id": config.url
          },
          datePublished
        }
      ]
    : schemaOrgJSONLD;
};

const SEO = ({ postData, postImage, isWork }) => {
  const postMeta = postData.frontmatter || {};

  const title = postMeta.title || config.title;
  const description =
    postMeta.description || postData.excerpt || config.description;
  const image = `${config.url}${postImage}` || config.image;
  const url = postMeta.slug
    ? `${config.url}${path.sep}${postMeta.slug}`
    : config.url;
  const datePublished = isWork ? postMeta.date : false;

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    isWork,
    url,
    title,
    image,
    description,
    datePublished
  });

  return (
    <Helmet>
      {/* General tags */}
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {isWork ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={config.fbAppID} />
    </Helmet>
  );
};

SEO.propTypes = {
  isWork: PropTypes.bool,
  postData: PropTypes.shape({
    frontmatter: PropTypes.any,
    excerpt: PropTypes.any
  }).isRequired,
  postImage: PropTypes.string
};

SEO.defaultProps = {
  isWork: false,
  postImage: null
};

export default SEO;
