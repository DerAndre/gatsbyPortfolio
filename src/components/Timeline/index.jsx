/*
 * @Script: index.jsx
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-05-22 22:06:52
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-05-24 14:05:44
 * @Description: Timeline component.
 */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleInfoBox } from '../../state/actions';
import * as constants from '../../constants';

const Ul = styled.ul`
  margin: 0px;
  text-align: center;
`;

const Li = styled.li`
  width: 10em;
  height: 10em;
  text-align: center;
  line-height: 10em;
  border-radius: 50%;
  background: ${constants.green};
  margin: 1em 0 2.5em 0;
  color: white;
  list-style: none;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  &::after {
    content: '';
    position: absolute;
    display: block;
    bottom: -3em;
    left: 5em;
    width: 0.4em;
    height: 3em;
    background: ${constants.green};
  }
  &:last-child::after {
    display: none;
  }
  &:hover {
    background: ${constants.red};
    box-shadow: 0 0 10em 2em ${constants.red};
    cursor: pointer;
  }
`;

const TimeLineText = styled.p`
  line-break: anywhere;
  line-height: normal;
  font-size: medium;
  margin: 0 5px 0 5px;
`;

const Timeline = ({ dispatch, data = [], image }) => {
  return (
    <Ul>
      {image}
      {data.map((entry, id) => (
        <Li
          key={id}
          onClick={() =>
            dispatch(
              toggleInfoBox(
                true,
                entry.title,
                entry.description,
                entry.longDescription,
              ),
            )
          }
        >
          <TimeLineText>
            <strong>{entry.date.split('-')[0]}</strong>
            <br />
            <br />
            <strong>{entry.title}</strong>
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

export default connect(null, null)(Timeline);
