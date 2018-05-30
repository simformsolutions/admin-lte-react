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
  text: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};

function UserMenuLink(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick;

  return _react2.default.createElement(
    'div',
    { className: 'col-xs-4 text-center' },
    _react2.default.createElement(
      'a',
      { style: { cursor: 'pointer' }, onClick: onClick },
      text
    )
  );
}

UserMenuLink.propTypes = propTypes;

var _default = UserMenuLink;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/header/UserMenuLink.js');

  __REACT_HOT_LOADER__.register(UserMenuLink, 'UserMenuLink', 'src/lib/header/UserMenuLink.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/header/UserMenuLink.js');
}();

;