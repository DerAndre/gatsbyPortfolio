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
