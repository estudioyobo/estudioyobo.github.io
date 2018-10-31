import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import "./work-page.css";
import Header from "../components/Header";
import TextPostBody from "../components/TextPostBody";
import SEO from "../components/SEO";
import WithFooter from "../components/Layout/WithFooter";

const WorkHeader = styled.section`
  position: relative;
  width: 100%;
  height: 60vh;
  background-color: #333;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 75px;
  padding-top: 1px;
`;

const Info = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ color }) => customColor(color)};
`;

const customColor = color => {
  if (color)
    return `
    h1 { color: ${color} }
    span {a, span {color: ${color}}}
    svg { fill: ${color} }
  `;
};

const Title = styled.h1`
  color: #333;
  ${({ noShadow }) => (noShadow ? "" : "text-shadow: 4px 2px 6px #000;")};
`;

const Chevron = styled.svg`
  width: 50px;
  height: 50px;
  fill: #333;
`;

const Tag = styled.span`
  a,
  span {
    color: #333;
    text-decoration: none;
    ${({ noShadow }) => (noShadow ? "" : "text-shadow: 4px 2px 8px #000;")};
  }
`;

const Section = styled.section`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const Navigation = styled.div`
  margin: 30px auto 0;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  display: flex;
  justify-content: space-between;
  a {
    color: #333;
    text-decoration: none;
    font-weight: 200;
    transition: transform 0.2s ease-in-out;
  }

  a:hover {
    transform: scale(1.1);
  }
`;

const TagsSection = ({ slugs, tagNames, noShadow }) => {
  let tags;
  if (slugs) {
    tags = slugs.map((tag, i) => {
      const divider = i < slugs.length - 1 && <span>{`, `}</span>;
      return (
        <Tag key={tag} noShadow={noShadow}>
          <a href="#">{tagNames[i]}</a>
          {divider}
        </Tag>
      );
    });
  }
  return <span style={{ fontStyle: "normal", textAlign: `left` }}>{tags}</span>;
};

const WorkTemplate = ({ data, pathContext, ...other }) => {
  const post = data.markdownRemark;
  const { next, prev } = pathContext;
  const { title, cover, color, noTitleShadow, tags } = post.frontmatter;

  return (
    <WithFooter>
      <article>
        <Helmet title={`Work | ${title}`} />
        <SEO postImage={cover} postData={post} isWork />
        <WorkHeader bg={cover}>
          <Header color={color} shadow={!noTitleShadow} />
          <Info color={color}>
            <Title noShadow={noTitleShadow}>{title}</Title>
            <TagsSection
              noShadow={noTitleShadow}
              slugs={post.fields.tagSlugs}
              tagNames={tags}
            />
            <Chevron
              version="1.1"
              id="chevron"
              x="0px"
              y="0px"
              viewBox="0 0 404.257 404.257"
            >
              <polygon points="386.257,114.331 202.128,252.427 18,114.331 0,138.331 202.128,289.927 404.257,138.331" />
            </Chevron>
          </Info>
        </WorkHeader>
        <Section>
          <TextPostBody htmlAst={post.htmlAst} />
        </Section>
        <Navigation>
          {prev ? (
            <Link className="link prev" to={`/${prev.fields.slug}`}>
              &laquo; {prev.frontmatter.title}
            </Link>
          ) : (
            <div />
          )}
          {next && (
            <Link className="link next" to={`/${next.fields.slug}`}>
              {next.frontmatter.title} &raquo;
            </Link>
          )}
        </Navigation>
      </article>
    </WithFooter>
  );
};

export const query = graphql`
  query WorkPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      fields {
        tagSlugs
      }
      frontmatter {
        title
        description
        tags
        cover
        color
        noTitleShadow
      }
    }
  }
`;

export default WorkTemplate;
