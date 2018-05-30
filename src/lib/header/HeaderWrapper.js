import React from 'react'; import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

function HeaderWrapper({ children }) {
  return (
    <header className="main-header">
      {children}
    </header>
  );
}

HeaderWrapper.propTypes = propTypes;

export default HeaderWrapper;
