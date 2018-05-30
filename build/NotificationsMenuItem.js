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
  icon: _propTypes2.default.string,
  iconColor: _propTypes2.default.string,
  children: _propTypes2.default.node,
  onClick: _propTypes2.default.func
};

var defaultProps = {
  icon: 'fa fa-users',
  iconColor: 'aqua'
};

function NotificationsMenuItem(_ref) {
  var icon = _ref.icon,
      iconColor = _ref.iconColor,
      children = _ref.children,
      onClick = _ref.onClick;

  return _react2.default.createElement(
    'li',
    null,
    _react2.default.createElement(
      'a',
      { style: { cursor: 'pointer' }, onClick: onClick },
      _react2.default.createElement('i', { className: icon + ' text-' + iconColor }),
      ' ',
      children
    )
  );
}

NotificationsMenuItem.propTypes = propTypes;
NotificationsMenuItem.defaultProps = defaultProps;

var _default = NotificationsMenuItem;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/header/NotificationsMenuItem.js');

  __REACT_HOT_LOADER__.register(defaultProps, 'defaultProps', 'src/lib/header/NotificationsMenuItem.js');

  __REACT_HOT_LOADER__.register(NotificationsMenuItem, 'NotificationsMenuItem', 'src/lib/header/NotificationsMenuItem.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/header/NotificationsMenuItem.js');
}();

;