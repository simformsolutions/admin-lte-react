'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _UserMenuBody = require('./UserMenuBody');

var _UserMenuBody2 = _interopRequireDefault(_UserMenuBody);

var _UserMenuLink = require('./UserMenuLink');

var _UserMenuLink2 = _interopRequireDefault(_UserMenuLink);

var _UserMenuFooter = require('./UserMenuFooter');

var _UserMenuFooter2 = _interopRequireDefault(_UserMenuFooter);

var _UserMenuButton = require('./UserMenuButton');

var _UserMenuButton2 = _interopRequireDefault(_UserMenuButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  image: _propTypes2.default.string,
  name: _propTypes2.default.string,
  title: _propTypes2.default.string,
  description: _propTypes2.default.string,
  links: _propTypes2.default.array,
  buttons: _propTypes2.default.array,
  onLinkClick: _propTypes2.default.func,
  onButtonClick: _propTypes2.default.func
};

var defaultProps = {
  image: '/images/no-avatar.png',
  name: 'Full Name',
  title: 'Title',
  description: 'Description',
  links: [],
  buttons: []
};

function UserMenu(_ref) {
  var image = _ref.image,
      name = _ref.name,
      title = _ref.title,
      description = _ref.description,
      links = _ref.links,
      buttons = _ref.buttons,
      onLinkClick = _ref.onLinkClick,
      onButtonClick = _ref.onButtonClick;

  return _react2.default.createElement(
    'li',
    { className: 'dropdown user user-menu' },
    _react2.default.createElement(
      'a',
      {
        className: 'dropdown-toggle',
        'data-toggle': 'dropdown',
        style: { cursor: 'pointer' }
      },
      _react2.default.createElement('img', { src: image, className: 'user-image', alt: 'User' }),
      _react2.default.createElement(
        'span',
        { className: 'hidden-xs' },
        name
      )
    ),
    _react2.default.createElement(
      'ul',
      { className: 'dropdown-menu' },
      _react2.default.createElement(
        'li',
        { className: 'user-header' },
        _react2.default.createElement('img', { src: image, className: 'img-circle', alt: 'User' }),
        _react2.default.createElement(
          'p',
          null,
          title,
          _react2.default.createElement(
            'small',
            null,
            description
          )
        )
      ),
      _react2.default.createElement(
        _UserMenuBody2.default,
        null,
        links.map(function (link) {
          return _react2.default.createElement(_UserMenuLink2.default, _extends({}, link, {
            onClick: function onClick() {
              return onLinkClick(link);
            }
          }));
        })
      ),
      _react2.default.createElement(
        _UserMenuFooter2.default,
        null,
        buttons.map(function (button) {
          return _react2.default.createElement(_UserMenuButton2.default, _extends({}, button, {
            onClick: function onClick() {
              return onButtonClick(button);
            }
          }));
        })
      )
    )
  );
}

UserMenu.propTypes = propTypes;
UserMenu.defaultProps = defaultProps;

var _default = UserMenu;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/header/UserMenu.js');

  __REACT_HOT_LOADER__.register(defaultProps, 'defaultProps', 'src/lib/header/UserMenu.js');

  __REACT_HOT_LOADER__.register(UserMenu, 'UserMenu', 'src/lib/header/UserMenu.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/header/UserMenu.js');
}();

;