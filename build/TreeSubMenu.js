'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  icon: _react.PropTypes.string,
  showIcon: _react.PropTypes.bool,
  title: _react.PropTypes.string,
  items: _react.PropTypes.array,
  isSelected: _react.PropTypes.bool,
  onClick: _react.PropTypes.func,
  onItemClick: _react.PropTypes.func
};

var defaultProps = {
  icon: 'fa fa-circle-o',
  showIcon: true,
  isSelected: false,
  items: []
};

var TreeSubMenu = function (_Component) {
  _inherits(TreeSubMenu, _Component);

  function TreeSubMenu(props) {
    _classCallCheck(this, TreeSubMenu);

    var _this = _possibleConstructorReturn(this, (TreeSubMenu.__proto__ || Object.getPrototypeOf(TreeSubMenu)).call(this, props));

    _this.renderItem = _this.renderItems.bind(_this);
    return _this;
  }

  _createClass(TreeSubMenu, [{
    key: 'renderItems',
    value: function renderItems() {
      var _this2 = this;

      if (this.props.items.length > 0) {
        return _react2.default.createElement(
          'ul',
          { className: 'treeview-menu' },
          this.props.items.map(function (item) {
            return _react2.default.createElement(TreeSubMenu, _extends({}, item, {
              onClick: function onClick() {
                return _this2.props.onItemClick(item);
              },
              onItemClick: _this2.props.onItemClick
            }));
          })
        );
      }

      return '';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        { className: this.props.isSelected ? 'active' : '' },
        _react2.default.createElement(
          'a',
          { style: { cursor: 'pointer' }, onClick: this.props.onClick },
          this.props.showIcon ? _react2.default.createElement('i', { className: this.props.icon }) : '',
          _react2.default.createElement(
            'span',
            null,
            ' ',
            this.props.title,
            ' '
          ),
          this.props.items.length > 0 ? _react2.default.createElement(
            'span',
            { className: 'pull-right-container' },
            _react2.default.createElement('i', { className: 'fa fa-angle-left pull-right' })
          ) : ''
        ),
        this.renderItems()
      );
    }
  }]);

  return TreeSubMenu;
}(_react.Component);

TreeSubMenu.propTypes = propTypes;
TreeSubMenu.defaultProps = defaultProps;

var _default = TreeSubMenu;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/sidebar/TreeSubMenu.js');

  __REACT_HOT_LOADER__.register(defaultProps, 'defaultProps', 'src/lib/sidebar/TreeSubMenu.js');

  __REACT_HOT_LOADER__.register(TreeSubMenu, 'TreeSubMenu', 'src/lib/sidebar/TreeSubMenu.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/sidebar/TreeSubMenu.js');
}();

;