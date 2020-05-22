import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 40rem;
  height: 20rem;
  position: fixed;
  top: 30%;
  display: flex;
  flex-direction: column;
  align-self: center;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  margin: 0px 10px 10px 0px;
  box-shadow: 0px 3px 4px 0px;
  background-color: dodgerblue;
`;

const Title = styled.p`
  fontsize: larger;
  color: white;
`;

const Text = styled.p`
  fontsize: medium;
  color: white;
`;

const InfoBox = ({ title, text }) => (
  <Box>
    <Title>{title}</Title>
    <Text>{text}</Text>
  </Box>
);

export default InfoBox;
