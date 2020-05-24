/*
 * @Script: actions.js
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-05-22 22:17:43
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-05-24 12:26:43
 * @Description: Redux actions.
 */
import { SHOW_INFO_BOX, DISMISS_INFO_BOX } from './constants';
export const toggleInfoBox = (
  infoBoxShowing,
  infoBoxTitle,
  infoBoxSubTitle,
  infoBoxText,
) => ({
  type: SHOW_INFO_BOX,
  infoBoxShowing,
  infoBoxTitle,
  infoBoxSubTitle,
  infoBoxText,
});

export const dismissInfoBox = () => ({
  type: DISMISS_INFO_BOX,
});
