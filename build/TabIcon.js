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
  href: _propTypes2.default.string,
  icon: _propTypes2.default.string
};

function TabIcon(_ref) {
  var href = _ref.href,
      icon = _ref.icon;

  return _react2.default.createElement(
    'li',
    null,
    _react2.default.createElement(
      'a',
      { href: href, 'data-toggle': 'tab' },
      _react2.default.createElement('i', { className: icon })
    )
  );
}

TabIcon.propTypes = propTypes;

var _default = TabIcon;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/controlbar/TabIcon.js');

  __REACT_HOT_LOADER__.register(TabIcon, 'TabIcon', 'src/lib/controlbar/TabIcon.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/controlbar/TabIcon.js');
}();

;