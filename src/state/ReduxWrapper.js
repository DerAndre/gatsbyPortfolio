/*
 * @Script: ReduxWrapper.js
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-05-22 22:12:04
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-05-22 22:12:04
 * @Description: This is description.
 */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import rootReducer from '.';

const createStore = () =>
  reduxCreateStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
);
