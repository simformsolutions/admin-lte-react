import React from 'react'; import PropTypes from 'prop-types';

const propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string,
};

function TabIcon({ href, icon }) {
  return (
    <li>
      <a href={href} data-toggle="tab">
        <i className={icon}></i>
      </a>
    </li>
  );
}

TabIcon.propTypes = propTypes;

export default TabIcon;
