/*
 * @Script: projectPageTemplate.jsx
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-05-22 22:12:14
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-05-25 01:16:24
 * @Description: This is description.
 */
import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Topic from '../components/Topic';
import BackArrow from '../components/Icons/BackArrowIcon';
import ExternalLinkIcon from '../components/Icons/ExternalLinkIcon';
import GitIcon from '../components/Icons/GitIcon';

const Span = styled.span`
  display: flex;
  align-items: center;
  align-content: center;
  justify-items: flex-start;
  margin-bottom: 1.45rem;
`;

const H1 = styled.h1`
  margin: 0;
`;

const ProjectLink = ({ link }) =>
  link ? (
    <Span>
      <ExternalLinkIcon
        width="1.5em"
        height="1.5em"
        additionalStye={{ marginRight: '1em' }}
      />
      <p>
        If you want to know more, feel free to{' '}
        <a href={link} target="new">
          take a look
        </a>
      </p>
    </Span>
  ) : null;

const ProjectSource = ({ link }) =>
  link ? (
    <Span>
      <GitIcon
        width="1.5em"
        height="1.5em"
        additionalStye={{ marginRight: '1em' }}
      />
      <a href={link} target="new">
        Check out the source
      </a>
    </Span>
  ) : null;

const ProjectImage = ({ image, rounded }) =>
  image ? (
    <img
      width="120px"
      height="120px"
      src={require(`../images/${image}`)}
      style={{ borderRadius: rounded ? '50%' : '0px' }}
      alt="Project Logo"
    />
  ) : null;

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Topic>
        <Span>
          <Link to="/">
            <BackArrow
              width="2em"
              height="2em"
              additionalStye={{ marginRight: '2em', verticalAlign: 'middle' }}
            />
          </Link>
          <H1>{frontmatter.title}</H1>
        </Span>
        <ProjectImage image={frontmatter.image} rounded={frontmatter.rounded} />
        <p>{frontmatter.longDescription}</p>
      </Topic>
      <Topic>
        <ProjectLink link={frontmatter.url} />
        <ProjectSource link={frontmatter.source} />
      </Topic>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        longDescription
        url
        source
        image
        rounded
      }
    }
  }
`;
