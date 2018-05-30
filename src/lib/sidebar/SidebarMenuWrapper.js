import React from 'react'; import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

function SidebarMenuWrapper({ children }) {
  return (
    <ul className="sidebar-menu">
      {children}
    </ul>
  );
}

SidebarMenuWrapper.propTypes = propTypes;

export default SidebarMenuWrapper;
