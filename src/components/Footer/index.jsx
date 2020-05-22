import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 2rem;
  height: 2rem;
  margin: 0 1rem 0 1rem;
  vertical-align: text-top;
`;
const StyledFooter = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0px;
  background-color: cornflowerblue;
  padding: 1rem 0 1rem 0;
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Span = styled.span`
  display: inline-flex;
  align-items: center;
  font-family: monospace;
  color: white;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Span>
        © {new Date().getFullYear()}, Powered by &nbsp;
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Span>
      <a href="https://github.com/DerAndre" target="new">
        <Img src={require('../../images/github-icon.png')} alt="github-logo" />
      </a>
      <a href="https://www.linkedin.com/in/andre-litty/" target="new">
        <Img
          src={require('../../images/linkedin-icon.png')}
          alt="linkedin-logo"
        />
      </a>
      <a href="mailto:alittysw@gmail.com">
        <Img src={require('../../images/email-icon.png')} alt="email-icon" />
      </a>
    </StyledFooter>
  );
};

export default Footer;
