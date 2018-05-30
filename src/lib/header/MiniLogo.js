import React from 'react'; import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

function MiniLogo({ children }) {
  return (
    <span className="logo-mini">
      {children}
    </span>
  );
}

MiniLogo.propTypes = propTypes;

export default MiniLogo;
