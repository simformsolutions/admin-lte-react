import React from 'react'; import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

function ControlbarWrapper({ children }) {
  return (
    <aside className="control-sidebar control-sidebar-dark">
      {children}
    </aside>
  );
}

ControlbarWrapper.propTypes = propTypes;

export default ControlbarWrapper;
