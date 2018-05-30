'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  icon: _propTypes2.default.string,
  title: _propTypes2.default.string,
  url: _propTypes2.default.string
};

function BreadcrumbItem(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      url = _ref.url;

  return _react2.default.createElement(
    'li',
    { className: (0, _classnames2.default)({ active: !url }) },
    url ? _react2.default.createElement(
      'a',
      { href: url },
      icon ? _react2.default.createElement('i', { className: icon }) : '',
      ' ',
      title
    ) : title
  );
}

BreadcrumbItem.propTypes = propTypes;

var _default = BreadcrumbItem;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/page/BreadcrumbItem.js');

  __REACT_HOT_LOADER__.register(BreadcrumbItem, 'BreadcrumbItem', 'src/lib/page/BreadcrumbItem.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/page/BreadcrumbItem.js');
}();

;