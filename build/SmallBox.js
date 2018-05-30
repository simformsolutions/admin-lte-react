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
  number: _propTypes2.default.number,
  sign: _propTypes2.default.string,
  text: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  color: _propTypes2.default.string,
  url: _propTypes2.default.string
};

var defaultProps = {
  number: 150,
  sign: '',
  text: 'New Orders',
  icon: 'ion-bag',
  color: 'aqua',
  url: '/new-orders'
};

function SmallBox(_ref) {
  var number = _ref.number,
      sign = _ref.sign,
      text = _ref.text,
      icon = _ref.icon,
      color = _ref.color,
      url = _ref.url;

  return _react2.default.createElement(
    'div',
    { className: 'col-lg-3 col-xs-6' },
    _react2.default.createElement(
      'div',
      { className: 'small-box bg-' + color },
      _react2.default.createElement(
        'div',
        { className: 'inner' },
        _react2.default.createElement(
          'h3',
          null,
          number,
          _react2.default.createElement(
            'sup',
            { style: { fontSize: 20 } },
            sign
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          text
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'icon' },
        _react2.default.createElement('i', { className: 'ion ' + icon })
      ),
      _react2.default.createElement(
        'a',
        { href: url, className: 'small-box-footer' },
        'More info ',
        _react2.default.createElement('i', { className: 'fa fa-arrow-circle-right' })
      )
    )
  );
}

SmallBox.propTypes = propTypes;
SmallBox.defaultProps = defaultProps;

var _default = SmallBox;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/widgets/SmallBox.js');

  __REACT_HOT_LOADER__.register(defaultProps, 'defaultProps', 'src/lib/widgets/SmallBox.js');

  __REACT_HOT_LOADER__.register(SmallBox, 'SmallBox', 'src/lib/widgets/SmallBox.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/widgets/SmallBox.js');
}();

;