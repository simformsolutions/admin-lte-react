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
  statusIcon: _propTypes2.default.string,
  statusText: _propTypes2.default.string
};

var defaultProps = {
  image: '/images/no-avatar.png',
  name: 'Full Name',
  statusIcon: 'fa fa-circle text-success',
  statusText: 'Online'
};

function UserPanel(_ref) {
  var image = _ref.image,
      name = _ref.name,
      statusIcon = _ref.statusIcon,
      statusText = _ref.statusText;

  return _react2.default.createElement(
    'div',
    { className: 'user-panel' },
    _react2.default.createElement(
      'div',
      { className: 'pull-left image' },
      _react2.default.createElement('img', { src: image, className: 'img-circle', alt: 'User' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'pull-left info' },
      _react2.default.createElement(
        'p',
        null,
        name
      ),
      _react2.default.createElement(
        'a',
        null,
        _react2.default.createElement('i', { className: statusIcon }),
        ' ',
        statusText
      )
    )
  );
}

UserPanel.propTypes = propTypes;
UserPanel.defaultProps = defaultProps;

var _default = UserPanel;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/sidebar/UserPanel.js');

  __REACT_HOT_LOADER__.register(defaultProps, 'defaultProps', 'src/lib/sidebar/UserPanel.js');

  __REACT_HOT_LOADER__.register(UserPanel, 'UserPanel', 'src/lib/sidebar/UserPanel.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/sidebar/UserPanel.js');
}();

;