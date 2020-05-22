/*
 * @Script: index.jsx
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-05-22 22:06:35
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-05-22 22:40:58
 * @Description: Header component.
 */
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';

import * as constants from '../../constants';

const StyledHeader = styled.header`
  background: ${constants.green};
  height: 10em;
  width: 100%;
`;

const H1 = styled.h1`
  position: relative;
  z-index: 2;
  padding: 2rem 0 0 2rem;
  font-size: xxx-large;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <H1>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </H1>
    <Particles
      width={`100%`}
      height={`15vh`}
      style={{
        position: `absolute`,
        top: `0px`,
        left: `0px`,
      }}
      params={{
        particles: {
          number: {
            value: 50,
          },
          color: {
            value: '#fff',
          },
          lineLinked: {
            enable: true,
            color: '#d20000',
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: false,
              speed: 100,
              size_min: 0.5,
              sync: false,
            },
          },
        },
      }}
    />
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
