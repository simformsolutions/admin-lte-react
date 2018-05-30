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
  count: _propTypes2.default.string,
  countSign: _propTypes2.default.string,
  title: _propTypes2.default.string,
  iconClasses: _propTypes2.default.string,
  url: _propTypes2.default.string,
  urlText: _propTypes2.default.string,
  color: _propTypes2.default.string
};

function StatBox(_ref) {
  var count = _ref.count,
      countSign = _ref.countSign,
      title = _ref.title,
      iconClasses = _ref.iconClasses,
      url = _ref.url,
      urlText = _ref.urlText,
      color = _ref.color;

  return _react2.default.createElement(
    'div',
    { className: 'small-box bg-' + color },
    _react2.default.createElement(
      'div',
      { className: 'inner' },
      _react2.default.createElement(
        'h3',
        null,
        count,
        _react2.default.createElement(
          'sup',
          { style: { fontSize: 20 } },
          countSign
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        title
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'icon' },
      _react2.default.createElement('i', { className: iconClasses })
    ),
    _react2.default.createElement(
      'a',
      { href: url, className: 'small-box-footer' },
      urlText,
      ' ',
      _react2.default.createElement('i', { className: 'fa fa-arrow-circle-right' })
    )
  );
}

StatBox.propTypes = propTypes;

var _default = StatBox;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/widgets/StatBox.js');

  __REACT_HOT_LOADER__.register(StatBox, 'StatBox', 'src/lib/widgets/StatBox.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/widgets/StatBox.js');
}();

;