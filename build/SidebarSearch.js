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
  placeholder: _propTypes2.default.string,
  onSubmit: _propTypes2.default.func
};

var defaultProps = {
  placeholder: 'Search...'
};

function SidebarSearch(_ref) {
  var placeholder = _ref.placeholder,
      onSubmit = _ref.onSubmit;

  var inputText = '';

  function handleInputTextChange(event) {
    inputText = event.target.value;
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(inputText);
  }

  return _react2.default.createElement(
    'form',
    { className: 'sidebar-form', onSubmit: handleSubmit },
    _react2.default.createElement(
      'div',
      { className: 'input-group' },
      _react2.default.createElement('input', {
        type: 'text',
        className: 'form-control',
        placeholder: placeholder,
        onChange: handleInputTextChange
      }),
      _react2.default.createElement(
        'span',
        { className: 'input-group-btn' },
        _react2.default.createElement(
          'button',
          {
            type: 'submit',
            className: 'btn btn-flat'
          },
          _react2.default.createElement('i', { className: 'fa fa-search' })
        )
      )
    )
  );
}

SidebarSearch.propTypes = propTypes;
SidebarSearch.defaultProps = defaultProps;

var _default = SidebarSearch;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/sidebar/SidebarSearch.js');

  __REACT_HOT_LOADER__.register(defaultProps, 'defaultProps', 'src/lib/sidebar/SidebarSearch.js');

  __REACT_HOT_LOADER__.register(SidebarSearch, 'SidebarSearch', 'src/lib/sidebar/SidebarSearch.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/sidebar/SidebarSearch.js');
}();

;