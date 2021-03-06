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

function HeaderWrapper(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'header',
    { className: 'main-header' },
    children
  );
}

HeaderWrapper.propTypes = propTypes;

var _default = HeaderWrapper;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/header/HeaderWrapper.js');

  __REACT_HOT_LOADER__.register(HeaderWrapper, 'HeaderWrapper', 'src/lib/header/HeaderWrapper.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/header/HeaderWrapper.js');
}();

;