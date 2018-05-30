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
  children: _propTypes2.default.node,
  onClick: _propTypes2.default.func
};

function Logo(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick;

  return _react2.default.createElement(
    'a',
    { className: 'logo', style: { cursor: 'pointer' }, onClick: onClick },
    children
  );
}

Logo.propTypes = propTypes;

var _default = Logo;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/header/Logo.js');

  __REACT_HOT_LOADER__.register(Logo, 'Logo', 'src/lib/header/Logo.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/header/Logo.js');
}();

;