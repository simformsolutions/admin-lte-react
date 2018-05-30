import React from 'react'; import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

function LargeLogo({ children }) {
  return (
    <span className="logo-lg">
      {children}
    </span>
  );
}

LargeLogo.propTypes = propTypes;

export default LargeLogo;
