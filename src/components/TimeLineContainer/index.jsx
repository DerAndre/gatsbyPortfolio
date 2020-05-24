/*
 * @Script: index.jsx
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-05-24 15:20:49
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-05-24 15:23:38
 * @Description: This is description.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TimeLineContainer = ({ children }) => <Div>{children}</Div>;

TimeLineContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TimeLineContainer;
