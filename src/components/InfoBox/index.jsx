/*
 * @Script: index.jsx
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-05-22 22:07:58
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-05-24 12:26:20
 * @Description: InfoBox component.
 */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as constants from '../../constants';
import { dismissInfoBox } from '../../state/actions';

const Box = styled.div`
  width: 40rem;
  height: 18rem;
  flex-direction: column;
  position: absolute;
  justify-self: center;
  align-self: center;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  margin: 0px 10px 10px 0px;
  box-shadow: 0px 0 1rem 0.3rem ${constants.red};
  background-color: ${constants.green};
  @media (max-width: 480px) {
    width: 20rem;
    height: auto;
  }
`;

const Title = styled.p`
  font-size: larger;
  color: white;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: medium;
  color: white;
`;

const Img = styled.img`
  width: 1em;
  height: 1em;
  margin: 0 1rem 0 1rem;
  vertical-align: text-top;
  align-self: flex-end;
`;

const InfoBox = ({
  dispatch,
  infoBoxShowing,
  infoBoxTitle,
  infoBoxSubTitle,
  infoBoxText,
}) => (
  <Box style={{ display: infoBoxShowing ? `flex` : `none` }}>
    <Img
      src={require('../../images/close-icon.png')}
      alt="github-logo"
      onClick={() => dispatch(dismissInfoBox())}
    />
    <Title>{infoBoxTitle}</Title>
    <Title>{infoBoxSubTitle}</Title>
    <Text>{infoBoxText}</Text>
  </Box>
);

InfoBox.propTypes = {
  infoBoxShowing: PropTypes.bool.isRequired,
  infoBoxTitle: PropTypes.string.isRequired,
  infoBoxSubTitle: PropTypes.string.isRequired,
  infoBoxText: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return { ...state.app };
}

export default connect(mapStateToProps)(InfoBox);
