import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import "./work-page.css";
import Header from "../components/Header";
import TextPostBody from "../components/TextPostBody";

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
  }
`;

const TagsSection = ({ slugs, tagNames }) => {
  let tags;
  if (slugs) {
    tags = slugs.map((tag, i) => {
      const divider = i < slugs.length - 1 && <span>{`, `}</span>;
      return (
        <Tag key={tag}>
          <Link to={tag}>{tagNames[i]}</Link>
          {divider}
        </Tag>
      );
    });
  }
  return <span style={{ fontStyle: "normal", textAlign: `left` }}>{tags}</span>;
};

const WorkTemplate = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <artice>
      <WorkHeader bg={post.frontmatter.cover}>
        <Header color={post.frontmatter.color} />
        <Info color={post.frontmatter.color}>
          <Title>{post.frontmatter.title}</Title>
          <TagsSection
            slugs={post.fields.tagSlugs}
            tagNames={post.frontmatter.tags}
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
      <section
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "0px 1.0875rem 1.45rem",
          paddingTop: 0
        }}
      >
        <TextPostBody htmlAst={post.htmlAst} />
      </section>
    </artice>
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
        tags
        cover
        color
      }
    }
  }
`;

export default WorkTemplate;
