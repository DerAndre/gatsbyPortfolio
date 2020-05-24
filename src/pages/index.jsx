/*
 * @Script: index.jsx
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-05-22 22:11:08
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-05-24 17:13:24
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
import TimeLineContainer from '../components/TimeLineContainer';
// import Avatar from '../components/Avatar';

import InfoBox from '../components/InfoBox';
import WorkIcon from '../components/Icons/WorkIcon';
import EducationIcon from '../components/Icons/EducationIcon';
import PythonIcon from '../components/Icons/PythonIcon';
import NodeIcon from '../components/Icons/NodeIcon';
import KotlinIcon from '../components/Icons/KotlinIcon';
import JSIcon from '../components/Icons/JSIcon';
import DjangoIcon from '../components/Icons/DjangoIcon';
import AndroidIcon from '../components/Icons/AndroidIcon';
import JavaIcon from '../components/Icons/JavaIcon';
import LinuxIcon from '../components/Icons/LinuxIcon';
import ReactIcon from '../components/Icons/ReactIcon';
import PostgresIcon from '../components/Icons/PostgresIcon';
import DockerIcon from '../components/Icons/DockerIcon';
import ThreeDotsIcon from '../components/Icons/ThreeDotsIcon';

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
      <Topic title="Hi people">
        <p>
          Welcome at Andres! Andre, thats me, a freelancing Full Stack Engineer
          who works 100% remotely!
        </p>
      </Topic>
      <Topic title="Projects">
        <p style={{ marginBottom: '2rem' }}>
          To give you an idea about what I'm doing, here is a short selection of
          my biggest and latest projects. Some of them are still a under
          development, others matured since my early days as a freelancer.
        </p>
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
      <Topic title="Education and Career">
        <p style={{ marginBottom: '2rem' }}>
          Becoming a Full Remote Worker was a process rather than a single step
          from one day to another. To get to this point I had to learn a lot and
          gather some experience. These are the stations, educational and
          professional experience, I went to.
        </p>
        <TimeLineContainer>
          <Timeline
            data={education}
            image={<EducationIcon width="5em" height="5em" fill="#fff" />}
          />
          <Timeline
            data={experience}
            image={<WorkIcon width="5em" height="5em" fill="#fff" />}
          />
          <InfoBox />
        </TimeLineContainer>
      </Topic>
      <Topic title="Technologies">
        <p>
          I'm passionate about technologies especially when it's web or mobile
          related stuff. Hence I always have an eye on the latest tech trends
          but also on the already battle proofed ones.
        </p>
        <p style={{ marginBottom: '2rem' }}>
          Rather than being a Jack of many but master of none, I prefer to
          actually know the tools I'm working with to get the most out of them.
        </p>
        <PythonIcon
          width="3em"
          height="3em"
          additionalStye={{ marginRight: '2em' }}
        />
        <NodeIcon
          width="3em"
          height="3em"
          additionalStye={{ marginRight: '2em' }}
        />
        <KotlinIcon
          width="3em"
          height="3em"
          additionalStye={{ marginRight: '2em' }}
        />
        <JSIcon
          width="3em"
          height="3em"
          additionalStye={{ marginRight: '2em' }}
        />
        <DjangoIcon
          width="3em"
          height="3em"
          additionalStye={{ marginRight: '2em' }}
        />
        <AndroidIcon
          width="3em"
          height="3em"
          additionalStye={{ marginRight: '2em' }}
        />
        <JavaIcon
          width="3em"
          height="3em"
          additionalStye={{ marginRight: '2em' }}
        />
        <LinuxIcon
          width="3em"
          height="3em"
          additionalStye={{ marginRight: '2em' }}
        />
        <ReactIcon
          width="3em"
          height="3em"
          additionalStye={{ marginRight: '2em' }}
        />
        <PostgresIcon
          width="3em"
          height="3em"
          additionalStye={{ marginRight: '2em' }}
        />
        <DockerIcon
          width="3em"
          height="3em"
          additionalStye={{ marginRight: '2em' }}
        />
        <ThreeDotsIcon width="3em" height="3em" />
      </Topic>
    </Layout>
  );
};

export default IndexPage;
