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
  image: _propTypes2.default.string,
  name: _propTypes2.default.string,
  timestamp: _propTypes2.default.string,
  children: _propTypes2.default.node,
  onClick: _propTypes2.default.func
};

var defaultProps = {
  image: '/images/user.png',
  name: 'Not Available',
  timestamp: 'N/A'
};

function MessagesMenuItem(_ref) {
  var image = _ref.image,
      name = _ref.name,
      timestamp = _ref.timestamp,
      children = _ref.children,
      onClick = _ref.onClick;

  return _react2.default.createElement(
    'li',
    null,
    _react2.default.createElement(
      'a',
      { style: { cursor: 'pointer' }, onClick: onClick },
      _react2.default.createElement(
        'div',
        { className: 'pull-left' },
        _react2.default.createElement('img', {
          src: image,
          className: 'img-circle', alt: 'User'
        })
      ),
      _react2.default.createElement(
        'h4',
        null,
        name,
        _react2.default.createElement(
          'small',
          null,
          _react2.default.createElement('i', { className: 'fa fa-clock-o' }),
          ' ',
          timestamp
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        children
      )
    )
  );
}

MessagesMenuItem.propTypes = propTypes;
MessagesMenuItem.defaultProps = defaultProps;

var _default = MessagesMenuItem;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/header/MessagesMenuItem.js');

  __REACT_HOT_LOADER__.register(defaultProps, 'defaultProps', 'src/lib/header/MessagesMenuItem.js');

  __REACT_HOT_LOADER__.register(MessagesMenuItem, 'MessagesMenuItem', 'src/lib/header/MessagesMenuItem.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/header/MessagesMenuItem.js');
}();

;