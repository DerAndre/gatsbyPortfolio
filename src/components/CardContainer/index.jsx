/*
 * @Script: index.jsx
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-05-22 22:09:55
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-05-22 22:09:55
 * @Description: CardContainer component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

const CardContainer = ({ children }) => <Div>{children}</Div>;

CardContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardContainer;
