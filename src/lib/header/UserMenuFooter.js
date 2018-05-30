import React from 'react'; import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

function UserMenuFooter({ children }) {
  return (
    <li className="user-footer">
      {children}
    </li>
  );
}

UserMenuFooter.propTypes = propTypes;

export default UserMenuFooter;
