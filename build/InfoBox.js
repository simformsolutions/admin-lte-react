'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  icon: _propTypes2.default.string,
  text: _propTypes2.default.string,
  count: _propTypes2.default.string,
  countSign: _propTypes2.default.string,
  progressCount: _propTypes2.default.number,
  progressText: _propTypes2.default.string,
  color: _propTypes2.default.string
};

var InfoBox = function (_Component) {
  _inherits(InfoBox, _Component);

  function InfoBox() {
    _classCallCheck(this, InfoBox);

    return _possibleConstructorReturn(this, (InfoBox.__proto__ || Object.getPrototypeOf(InfoBox)).apply(this, arguments));
  }

  _createClass(InfoBox, [{
    key: 'getBoxClasses',
    value: function getBoxClasses() {
      var bgColor = {};
      bgColor['bg-' + this.props.color] = this.hasProgress();
      return (0, _classnames2.default)('info-box', bgColor);
    }
  }, {
    key: 'getIconClasses',
    value: function getIconClasses() {
      var bgColor = {};
      bgColor['bg-' + this.props.color] = !this.hasProgress();
      return (0, _classnames2.default)('info-box-icon', bgColor);
    }
  }, {
    key: 'hasProgress',
    value: function hasProgress() {
      return typeof this.props.progressCount === 'number';
    }
  }, {
    key: 'renderProgress',
    value: function renderProgress() {
      if (this.hasProgress()) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'progress' },
            _react2.default.createElement('div', {
              className: 'progress-bar',
              style: { width: this.props.progressCount + '%' }
            })
          ),
          _react2.default.createElement(
            'span',
            { className: 'progress-description' },
            this.props.progressText
          )
        );
      }
      return '';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.getBoxClasses() },
        _react2.default.createElement(
          'span',
          { className: this.getIconClasses() },
          _react2.default.createElement('i', { className: this.props.icon })
        ),
        _react2.default.createElement(
          'div',
          { className: 'info-box-content' },
          _react2.default.createElement(
            'span',
            { className: 'info-box-text' },
            this.props.text
          ),
          _react2.default.createElement(
            'span',
            { className: 'info-box-number' },
            this.props.count,
            _react2.default.createElement(
              'small',
              null,
              this.props.countSign
            )
          ),
          this.renderProgress()
        )
      );
    }
  }]);

  return InfoBox;
}(_react.Component);

InfoBox.propTypes = propTypes;

var _default = InfoBox;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/widgets/InfoBox.js');

  __REACT_HOT_LOADER__.register(InfoBox, 'InfoBox', 'src/lib/widgets/InfoBox.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/widgets/InfoBox.js');
}();

;