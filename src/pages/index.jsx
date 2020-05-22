import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Card from '../components/Card';
import CardContainer from '../components/CardContainer';
import Timeline from '../components/Timeline';
import Topic from '../components/Topic';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        group(field: frontmatter___type) {
          edges {
            node {
              frontmatter {
                title
                path
                description
              }
            }
          }
          fieldValue
        }
      }
    }
  `);
  const projects = data.allMarkdownRemark.group
    .filter((item) => item.fieldValue === 'pro')
    .map((item) => {
      return item.edges;
    })[0];
  const education = data.allMarkdownRemark.group
    .filter((item) => item.fieldValue === 'edu')
    .map((item) => {
      return item.edges;
    })[0];
  const experience = data.allMarkdownRemark.group
    .filter((item) => item.fieldValue === 'exp')
    .map((item) => {
      return item.edges;
    })[0];
  return (
    <Layout>
      <SEO title="Home" />
      <Topic>
        <h1>Hi people</h1>
        <p>
          Welcome people, I'd like to introduce myself to you, as a web
          developer, through this website.
        </p>
      </Topic>
      <Topic>
        <h1>Projects</h1>
        <CardContainer>
          {projects.map((project, id) => (
            <Card
              title={project.node.frontmatter.title}
              linksTo={project.node.frontmatter.path}
              description={project.node.frontmatter.description}
              key={id}
            />
          ))}
        </CardContainer>
      </Topic>
      <Topic>
        <h1>Education and Career</h1>
        <div
          style={{
            display: `flex`,
            justifyContent: `space-around`,
          }}
        >
          <Timeline
            data={education}
            image={require('../images/education-icon.png')}
            altText="education-icon"
          />
          <Timeline
            data={experience}
            image={require('../images/work-icon.png')}
            altText="working-icon"
          />
        </div>
      </Topic>
    </Layout>
  );
};

export default IndexPage;
