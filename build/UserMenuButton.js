'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  text: _propTypes2.default.string,
  align: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};

var defaultProps = {
  text: 'Button',
  align: 'right'
};

function UserMenuButton(_ref) {
  var text = _ref.text,
      align = _ref.align,
      onClick = _ref.onClick;

  return _react2.default.createElement(
    'div',
    { className: 'pull-' + align },
    _react2.default.createElement(
      'a',
      {
        className: 'btn btn-default btn-flat',
        onClick: onClick
      },
      text
    )
  );
}

UserMenuButton.propTypes = propTypes;
UserMenuButton.defaultProps = defaultProps;

var _default = UserMenuButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/header/UserMenuButton.js');

  __REACT_HOT_LOADER__.register(defaultProps, 'defaultProps', 'src/lib/header/UserMenuButton.js');

  __REACT_HOT_LOADER__.register(UserMenuButton, 'UserMenuButton', 'src/lib/header/UserMenuButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/header/UserMenuButton.js');
}();

;