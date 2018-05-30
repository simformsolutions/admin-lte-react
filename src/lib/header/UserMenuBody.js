import React from 'react'; import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

function UserMenuBody({ children }) {
  return (
    <li className="user-body">
      <div className="row">
        {children}
      </div>
    </li>
  );
}

UserMenuBody.propTypes = propTypes;

export default UserMenuBody;
