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
  children: _propTypes2.default.node
};

function UserMenuFooter(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'li',
    { className: 'user-footer' },
    children
  );
}

UserMenuFooter.propTypes = propTypes;

var _default = UserMenuFooter;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/header/UserMenuFooter.js');

  __REACT_HOT_LOADER__.register(UserMenuFooter, 'UserMenuFooter', 'src/lib/header/UserMenuFooter.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/header/UserMenuFooter.js');
}();

;