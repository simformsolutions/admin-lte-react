'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MessagesMenuItem = require('./MessagesMenuItem');

var _MessagesMenuItem2 = _interopRequireDefault(_MessagesMenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  items: _propTypes2.default.array,
  onItemClick: _propTypes2.default.func,
  onFooterClick: _propTypes2.default.func
};

var defaultProps = {
  items: []
};

function MessagesMenu(_ref) {
  var items = _ref.items,
      onItemClick = _ref.onItemClick,
      onFooterClick = _ref.onFooterClick;

  var count = items.length;
  return _react2.default.createElement(
    'li',
    { className: 'dropdown messages-menu' },
    _react2.default.createElement(
      'a',
      {
        className: 'dropdown-toggle',
        'data-toggle': 'dropdown',
        style: { cursor: 'pointer' }
      },
      _react2.default.createElement('i', { className: 'fa fa-envelope-o' }),
      _react2.default.createElement(
        'span',
        { className: 'label label-success' },
        count
      )
    ),
    _react2.default.createElement(
      'ul',
      { className: 'dropdown-menu' },
      _react2.default.createElement(
        'li',
        { className: 'header' },
        'You have ',
        count,
        ' messages'
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'ul',
          { className: 'menu' },
          items.map(function (item) {
            return _react2.default.createElement(
              _MessagesMenuItem2.default,
              _extends({}, item, {
                onClick: function onClick() {
                  return onItemClick(item);
                }
              }),
              item.text
            );
          })
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'footer' },
        _react2.default.createElement(
          'a',
          { style: { cursor: 'pointer' }, onClick: onFooterClick },
          'See All Messages'
        )
      )
    )
  );
}

MessagesMenu.propTypes = propTypes;
MessagesMenu.defaultProps = defaultProps;

var _default = MessagesMenu;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/header/MessagesMenu.js');

  __REACT_HOT_LOADER__.register(defaultProps, 'defaultProps', 'src/lib/header/MessagesMenu.js');

  __REACT_HOT_LOADER__.register(MessagesMenu, 'MessagesMenu', 'src/lib/header/MessagesMenu.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/header/MessagesMenu.js');
}();

;