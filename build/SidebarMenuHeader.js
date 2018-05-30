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
  title: _propTypes2.default.string
};

function SidebarMenuHeader(_ref) {
  var title = _ref.title;

  return _react2.default.createElement(
    'li',
    { className: 'header' },
    title
  );
}

SidebarMenuHeader.propTypes = propTypes;

var _default = SidebarMenuHeader;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/sidebar/SidebarMenuHeader.js');

  __REACT_HOT_LOADER__.register(SidebarMenuHeader, 'SidebarMenuHeader', 'src/lib/sidebar/SidebarMenuHeader.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/sidebar/SidebarMenuHeader.js');
}();

;