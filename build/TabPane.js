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
  id: _propTypes2.default.string,
  children: _propTypes2.default.node
};

function TabPane(_ref) {
  var id = _ref.id,
      children = _ref.children;

  return _react2.default.createElement(
    'div',
    { className: 'tab-pane', id: id },
    children
  );
}

TabPane.propTypes = propTypes;

var _default = TabPane;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/controlbar/TabPane.js');

  __REACT_HOT_LOADER__.register(TabPane, 'TabPane', 'src/lib/controlbar/TabPane.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/controlbar/TabPane.js');
}();

;