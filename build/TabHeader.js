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

function TabHeader(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'ul',
    { className: 'nav nav-tabs nav-justified control-sidebar-tabs' },
    children
  );
}

TabHeader.propTypes = propTypes;

var _default = TabHeader;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/controlbar/TabHeader.js');

  __REACT_HOT_LOADER__.register(TabHeader, 'TabHeader', 'src/lib/controlbar/TabHeader.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/controlbar/TabHeader.js');
}();

;