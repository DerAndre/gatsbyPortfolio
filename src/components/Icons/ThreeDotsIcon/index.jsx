/*
 * @Script: index.jsx
 * @Author: Andre Litty
 * @Email: alittysw@gmail.com
 * @Create At: 2020-05-24 14:09:10
 * @Last Modified By: Andre Litty
 * @Last Modified At: 2020-05-24 16:30:39
 * @Description: This is description.
 */
import React from 'react';

const white = '#fff';

const ThreeDotsIcon = ({ width, height }) => (
  <svg viewBox="0 0 512 512" width={width} height={height}>
    <g id="More">
      <circle cx="256" cy="258" fill={white} r="56" />
      <circle cx="72" cy="258" fill={white} r="56" />
      <circle cx="440" cy="258" fill={white} r="56" />
      <path d="m256 192a64 64 0 1 0 64 64 64.072 64.072 0 0 0 -64-64zm0 112a48 48 0 1 1 48-48 48.055 48.055 0 0 1 -48 48z" />
      <path d="m72 192a64 64 0 1 0 64 64 64.072 64.072 0 0 0 -64-64zm0 112a48 48 0 1 1 48-48 48.055 48.055 0 0 1 -48 48z" />
      <path d="m440 192a64 64 0 1 0 64 64 64.072 64.072 0 0 0 -64-64zm0 112a48 48 0 1 1 48-48 48.055 48.055 0 0 1 -48 48z" />
    </g>
  </svg>
);

export default ThreeDotsIcon;
