/*
 * @Script: app.js
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-05-22 22:11:45
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-05-22 22:19:02
 * @Description: This is description.
 */
import { SHOW_INFO_BOX, DISMISS_INFO_BOX } from './constants';

const initialState = {
  infoBoxShowing: false,
  infoBoxTitle: '',
  infoBoxSubTitle: '',
  infoBoxText: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_INFO_BOX:
      return { ...state, ...action };
    case DISMISS_INFO_BOX:
      return { ...state, ...initialState };
    default:
      return state;
  }
};
