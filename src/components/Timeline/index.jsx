import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Ul = styled.ul`
  margin-left: 0px;
  text-align: center;
`;

const Li = styled.li`
  width: 12em;
  height: 12em;
  text-align: center;
  line-height: 10em;
  border-radius: 50%;
  background: dodgerblue;
  margin: 0 0 2.5em 0;
  color: white;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: '';
    position: relative;
    display: block;
    bottom: -7em;
    left: -6em;
    width: 0.4em;
    height: 3em;
    background: dodgerblue;
    z-index: -1;
  }
  &:last-child::after {
    display: none;
  }
  &:hover {
    background: rgb(1, 55, 96);
    box-shadow: 0 10px 30px rgb(1, 55, 96);
  }
`;

const TimeLineText = styled.p`
  line-break: anywhere;
  line-height: normal;
  font-size: medium;
  margin: 0 5px 0 5px;
`;

const Img = styled.img`
  width: 6rem;
`;

const Timeline = ({ data = [], image, altText = 'icon' }) => {
  return (
    <Ul>
      <Img src={image} alt={altText} />
      {data.map((entry, id) => (
        <Li key={id}>
          <TimeLineText>
            <strong>{entry.node.frontmatter.title}</strong>
            <br />
            <br />
            {entry.node.frontmatter.description}
          </TimeLineText>
        </Li>
      ))}
    </Ul>
  );
};

Timeline.propTypes = {
  data: PropTypes.array.isRequired,
  image: PropTypes.any.isRequired,
  altText: PropTypes.string,
};

export default Timeline;
