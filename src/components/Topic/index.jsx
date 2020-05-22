import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.section`
  margin-bottom: 2em;
  display: block;
  &::after {
    content: '';
    display: block;
    height: 3px;
    background: #30363e24;
    margin-top: 1.5rem;
  }
  &:last-of-type::after {
    display: none;
  }
`;

const Topic = ({ children }) => <Section>{children}</Section>;

Topic.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Topic;
