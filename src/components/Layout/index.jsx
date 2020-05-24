/*
 * @Script: index.jsx
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-05-22 22:07:13
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-05-24 14:07:39
 * @Description: Layout component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from '../Header';
import Footer from '../Footer';
import * as constants from '../../constants';
import '../layout.css';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1.45rem 2rem 0 2rem;
  margin-bottom: 4rem;
  background-color: ${constants.darkBackground};
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div style={{ height: `100%` }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
