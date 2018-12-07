import { css } from 'styled-components';
import { cloneDeep, keys, reduce } from 'lodash';

export const sizes = {
  xs: 400,
  sm: 576,
  md: 768,
  lg: 991,
  ml: 1024,
  xl: 1200,
};

export const minMedia = reduce(
  keys(sizes),
  (screen, label) => {
    const pxSize = sizes[label];
    const newScreen = cloneDeep(screen);

    newScreen[label] = (...args) => css`
      @media (min-width: ${pxSize}px) {
        ${css(...args)}
      }
    `;

    return newScreen;
  },
  {},
);

export const maxMedia = reduce(
  keys(sizes),
  (screen, label) => {
    const pxSize = sizes[label];
    const newScreen = cloneDeep(screen);

    newScreen[label] = (...args) => css`
      @media (max-width: ${pxSize}px) {
        ${css(...args)}
      }
    `;

    return newScreen;
  },
  {},
);
