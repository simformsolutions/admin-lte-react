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
  controlbarIcon: _propTypes2.default.node,
  children: _propTypes2.default.node
};

var defaultProps = {
  controlbarIcon: 'fa fa-gears'
};

function Navbar(_ref) {
  var controlbarIcon = _ref.controlbarIcon,
      children = _ref.children;

  return _react2.default.createElement(
    'nav',
    { className: 'navbar navbar-static-top', role: 'navigation' },
    _react2.default.createElement(
      'a',
      {
        className: 'sidebar-toggle',
        'data-toggle': 'offcanvas',
        role: 'button',
        style: { cursor: 'pointer' }
      },
      _react2.default.createElement(
        'span',
        { className: 'sr-only' },
        'Toggle navigation'
      ),
      _react2.default.createElement('span', { className: 'icon-bar' }),
      _react2.default.createElement('span', { className: 'icon-bar' }),
      _react2.default.createElement('span', { className: 'icon-bar' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'navbar-custom-menu' },
      _react2.default.createElement(
        'ul',
        { className: 'nav navbar-nav' },
        children,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { 'data-toggle': 'control-sidebar', style: { cursor: 'pointer' } },
            _react2.default.createElement('i', { className: controlbarIcon })
          )
        )
      )
    )
  );
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

var _default = Navbar;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/header/Navbar.js');

  __REACT_HOT_LOADER__.register(defaultProps, 'defaultProps', 'src/lib/header/Navbar.js');

  __REACT_HOT_LOADER__.register(Navbar, 'Navbar', 'src/lib/header/Navbar.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/header/Navbar.js');
}();

;