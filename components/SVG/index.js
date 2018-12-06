import React from 'react';

const Icons = () => <svg xmlns="http://www.w3.org/2000/svg" className="d-none" />;

const SVG = ({
 name, className, width, height,
}) => (
  <svg
    className={className}
    width={width}
    name={name}
    height={height}
    aria-hidden="true"
    title={name}
  >
    <use xmlns="http://www.w3.org/1999/xlink" xlinkHref={`#icon-${name}`} />
  </svg>
);

SVG.defaultProps = {
  name: '',
  className: '',
  width: 0,
  height: 0,
};

export default SVG;
export { Icons };
