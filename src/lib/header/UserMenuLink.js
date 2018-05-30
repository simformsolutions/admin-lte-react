import React from 'react'; import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

function UserMenuLink({ text, onClick }) {
  return (
    <div className="col-xs-4 text-center">
      <a style={{ cursor: 'pointer' }} onClick={onClick}>{text}</a>
    </div>
  );
}

UserMenuLink.propTypes = propTypes;

export default UserMenuLink;
