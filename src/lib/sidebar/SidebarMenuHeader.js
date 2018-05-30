import React from 'react'; import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
};

function SidebarMenuHeader({ title }) {
  return <li className="header">{title}</li>;
}

SidebarMenuHeader.propTypes = propTypes;

export default SidebarMenuHeader;
