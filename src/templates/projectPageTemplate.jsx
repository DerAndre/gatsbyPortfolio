/*
 * @Script: projectPageTemplate.jsx
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-05-22 22:12:14
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-05-22 22:12:14
 * @Description: This is description.
 */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Topic from '../components/Topic';

const ProjectLink = ({ link }) =>
  link ? (
    <p>
      If you want to know more, feel free to{' '}
      <a href={link} target="new">
        take a look
      </a>
    </p>
  ) : null;

const ProjectSource = ({ link }) =>
  link ? (
    <a href={link} target="new">
      Check out the source
    </a>
  ) : null;

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Topic>
        <h1>{frontmatter.title}</h1>
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
      }
    }
  }
`;
