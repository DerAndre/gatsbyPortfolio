/*
 * @Script: index.jsx
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-05-22 22:09:04
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-05-24 16:42:52
 * @Description: Topic component.
 */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import * as constants from '../../constants';

const Section = styled.section`
  margin-bottom: 2em;
  display: block;
  &::after {
    content: '';
    display: block;
    height: 3px;
    background: ${constants.lightSectionSeparator};
    margin-top: 1.5rem;
    border-radius: 5px;
  }
  &:last-of-type::after {
    display: none;
  }
`;

const Topic = ({ title, children }) => (
  <Section>
    <h1>{title}</h1>
    {children}
  </Section>
);

Topic.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Topic;
