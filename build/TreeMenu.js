'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TreeSubMenu = require('./TreeSubMenu');

var _TreeSubMenu2 = _interopRequireDefault(_TreeSubMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  icon: _propTypes2.default.string,
  iconColor: _propTypes2.default.string,
  title: _propTypes2.default.string,
  label: _propTypes2.default.string,
  labelColor: _propTypes2.default.string,
  showLabel: _propTypes2.default.bool,
  items: _propTypes2.default.array,
  onClick: _propTypes2.default.func,
  onItemClick: _propTypes2.default.func
};

var defaultProps = {
  icon: 'fa fa-circle-o',
  showLabel: true,
  items: []
};

var TreeMenu = function (_Component) {
  _inherits(TreeMenu, _Component);

  function TreeMenu(props) {
    _classCallCheck(this, TreeMenu);

    var _this = _possibleConstructorReturn(this, (TreeMenu.__proto__ || Object.getPrototypeOf(TreeMenu)).call(this, props));

    _this.state = {
      selectedMenuId: null
    };
    _this.renderLabel = _this.renderLabel.bind(_this);
    _this.renderLink = _this.renderLink.bind(_this);
    _this.renderItems = _this.renderItems.bind(_this);
    return _this;
  }

  _createClass(TreeMenu, [{
    key: 'handleMenuClick',
    value: function handleMenuClick(menu) {
      this.setState({
        selectedMenuId: menu.id
      });
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel() {
      if (this.props.showLabel === false) {
        return '';
      }
      if (this.props.label) {
        if (this.props.labelColor) {
          return _react2.default.createElement(
            'small',
            { className: 'label pull-right bg-' + this.props.labelColor },
            this.props.label
          );
        }

        return _react2.default.createElement(
          'small',
          { className: 'label label-primary pull-right' },
          this.props.label
        );
      }
      return _react2.default.createElement('i', { className: 'fa fa-angle-left pull-right' });
    }
  }, {
    key: 'renderLink',
    value: function renderLink() {
      return _react2.default.createElement(
        'a',
        { style: { cursor: 'pointer' }, onClick: this.props.onClick },
        _react2.default.createElement('i', { className: this.props.icon + ' text-' + this.props.iconColor }),
        _react2.default.createElement(
          'span',
          null,
          ' ',
          this.props.title,
          ' '
        ),
        _react2.default.createElement(
          'span',
          { className: 'pull-right-container' },
          this.renderLabel()
        )
      );
    }
  }, {
    key: 'renderItems',
    value: function renderItems() {
      var _this2 = this;

      if (this.props.items.length > 0) {
        return _react2.default.createElement(
          'ul',
          { className: 'treeview-menu' },
          this.props.items.map(function (item) {
            var isSelected = item.id === _this2.state.selectedMenuId;
            return _react2.default.createElement(_TreeSubMenu2.default, _extends({}, item, {
              isSelected: isSelected,
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
        { className: 'treeview' },
        this.renderLink(),
        this.renderItems()
      );
    }
  }]);

  return TreeMenu;
}(_react.Component);

TreeMenu.propTypes = propTypes;
TreeMenu.defaultProps = defaultProps;

var _default = TreeMenu;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/sidebar/TreeMenu.js');

  __REACT_HOT_LOADER__.register(defaultProps, 'defaultProps', 'src/lib/sidebar/TreeMenu.js');

  __REACT_HOT_LOADER__.register(TreeMenu, 'TreeMenu', 'src/lib/sidebar/TreeMenu.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/sidebar/TreeMenu.js');
}();

;