import React from 'react'; import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

function TabHeader({ children }) {
  return (
    <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
      {children}
    </ul>
  );
}

TabHeader.propTypes = propTypes;

export default TabHeader;
