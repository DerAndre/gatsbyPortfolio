/*
 * @Script: index.jsx
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-05-22 22:05:59
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-05-29 16:56:22
 * @Description: Card component.
 */
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import * as constants from '../../constants';

const StyledCard = styled.div`
  width: 400px;
  max-width: 80vw;
  height: 100px;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  margin: 0px 10px 10px 0px;
  box-shadow: 0px 3px 4px 0px;
  background-color: ${constants.green};
  &:hover {
    border-color: ${constants.red};
    border-width: 2px;
    box-shadow: 0 0 1em 5px ${constants.red};
  }
  @media only screen and (max-width: 480px) {
    height: auto;
  }
`;

const CardTitle = styled.p`
  font-size: large;
  text-shadow: 1px 1px 1px black;
`;

const CardText = styled.p`
  font-size: medium;
  font-weight: 500;
`;

const Card = ({ title, linksTo, description }) => (
  <Link
    to={linksTo}
    style={{
      textDecoration: `none`,
      color: `transparent`,
      fontSize: `larger`,
      fontWeight: `bold`,
    }}
  >
    <StyledCard>
      <CardTitle>{title}</CardTitle>
      <CardText>{description}</CardText>
    </StyledCard>
  </Link>
);

export default Card;
