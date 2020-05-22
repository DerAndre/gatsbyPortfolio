import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 400px;
  height: 100px;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  margin: 0px 10px 10px 0px;
  box-shadow: 0px 3px 4px 0px;
  background-color: dodgerblue;
  &:hover {
    border-color: dodgerblue;
    border-width: 2px;
    box-shadow: 4px 4px 4px 4px;
  }
`;

const CardText = styled.p`
  font-size: medium;
  color: white;
`;

const Card = ({ title, linksTo, description }) => (
  <StyledCard>
    <Link
      to={linksTo}
      style={{
        textDecoration: `none`,
        color: `white`,
        fontSize: `larger`,
        fontWeight: `bold`,
      }}
    >
      {title}
    </Link>
    <CardText>{description}</CardText>
  </StyledCard>
);

export default Card;
