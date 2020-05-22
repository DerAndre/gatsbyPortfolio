/*
 * @Script: index.jsx
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-05-22 22:11:08
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-05-22 23:00:52
 * @Description: Main site.
 */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Card from '../components/Card';
import CardContainer from '../components/CardContainer';
import Timeline from '../components/Timeline';
import Topic from '../components/Topic';
import InfoBox from '../components/InfoBox';
import WorkIcon from '../components/WorkIcon';
import EducationIcon from '../components/EducationIcon';

import * as education from '../data/education';
import * as experience from '../data/professionalExperience';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              path
              date
              description
              longDescription
              source
              url
              image
            }
          }
        }
      }
    }
  `);

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
          {data.allMarkdownRemark.edges.map((project, id) => (
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
            image={<EducationIcon width="5em" height="5em" fill="#fff" />}
          />
          <Timeline
            data={experience}
            image={<WorkIcon width="5em" height="5em" fill="#fff" />}
          />
          <InfoBox />
        </div>
      </Topic>
    </Layout>
  );
};

export default IndexPage;
