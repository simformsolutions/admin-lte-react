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
  title: _propTypes2.default.string,
  status: _propTypes2.default.string,
  solid: _propTypes2.default.bool,
  expandable: _propTypes2.default.bool,
  removable: _propTypes2.default.bool,
  collapsed: _propTypes2.default.bool,
  loading: _propTypes2.default.bool,
  children: _propTypes2.default.node
};

var defaultProps = {
  status: 'default',
  solid: false,
  expandable: false,
  removable: false,
  collapsed: false,
  loading: false
};

var Box = function (_Component) {
  _inherits(Box, _Component);

  function Box() {
    _classCallCheck(this, Box);

    return _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).apply(this, arguments));
  }

  _createClass(Box, [{
    key: 'getClasses',
    value: function getClasses() {
      return (0, _classnames2.default)('box', 'box-' + this.props.status, { 'box-solid': this.props.solid }, { 'collapsed-box': this.props.collapsed });
    }
  }, {
    key: 'renderExpandButton',
    value: function renderExpandButton() {
      if (this.props.expandable) {
        return _react2.default.createElement(
          'button',
          {
            type: 'button',
            className: 'btn btn-box-tool',
            'data-widget': 'collapse'
          },
          this.props.collapsed ? _react2.default.createElement('i', { className: 'fa fa-plus' }) : _react2.default.createElement('i', { className: 'fa fa-minus' })
        );
      }
      return '';
    }
  }, {
    key: 'renderRemoveButton',
    value: function renderRemoveButton() {
      if (this.props.removable) {
        return _react2.default.createElement(
          'button',
          {
            type: 'button',
            className: 'btn btn-box-tool',
            'data-widget': 'remove'
          },
          _react2.default.createElement('i', { className: 'fa fa-times' })
        );
      }
      return '';
    }
  }, {
    key: 'renderLoading',
    value: function renderLoading() {
      if (this.props.loading) {
        return _react2.default.createElement(
          'div',
          { className: 'overlay' },
          _react2.default.createElement('i', { className: 'fa fa-refresh fa-spin' })
        );
      }
      return '';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.getClasses() },
        _react2.default.createElement(
          'div',
          { className: 'box-header with-border' },
          _react2.default.createElement(
            'h3',
            { className: 'box-title' },
            this.props.title
          ),
          _react2.default.createElement(
            'div',
            { className: 'box-tools pull-right' },
            this.renderExpandButton(),
            this.renderRemoveButton()
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'box-body' },
          this.props.children
        ),
        this.renderLoading()
      );
    }
  }]);

  return Box;
}(_react.Component);

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

var _default = Box;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/widgets/Box.js');

  __REACT_HOT_LOADER__.register(defaultProps, 'defaultProps', 'src/lib/widgets/Box.js');

  __REACT_HOT_LOADER__.register(Box, 'Box', 'src/lib/widgets/Box.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/widgets/Box.js');
}();

;