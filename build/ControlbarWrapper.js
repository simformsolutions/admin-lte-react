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

function ControlbarWrapper(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'aside',
    { className: 'control-sidebar control-sidebar-dark' },
    children
  );
}

ControlbarWrapper.propTypes = propTypes;

var _default = ControlbarWrapper;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/controlbar/ControlbarWrapper.js');

  __REACT_HOT_LOADER__.register(ControlbarWrapper, 'ControlbarWrapper', 'src/lib/controlbar/ControlbarWrapper.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/controlbar/ControlbarWrapper.js');
}();

;