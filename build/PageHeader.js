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
  title: _propTypes2.default.string,
  description: _propTypes2.default.string,
  children: _propTypes2.default.node
};

function PageHeader(_ref) {
  var title = _ref.title,
      description = _ref.description,
      children = _ref.children;

  return _react2.default.createElement(
    'section',
    { className: 'content-header' },
    _react2.default.createElement(
      'h1',
      null,
      title,
      ' ',
      _react2.default.createElement(
        'small',
        null,
        description
      )
    ),
    children
  );
}

PageHeader.propTypes = propTypes;

var _default = PageHeader;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/page/PageHeader.js');

  __REACT_HOT_LOADER__.register(PageHeader, 'PageHeader', 'src/lib/page/PageHeader.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/page/PageHeader.js');
}();

;