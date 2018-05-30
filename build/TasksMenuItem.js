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
  progress: _propTypes2.default.number,
  color: _propTypes2.default.string,
  children: _propTypes2.default.node,
  onClick: _propTypes2.default.func
};

function TasksMenuItem(_ref) {
  var progress = _ref.progress,
      color = _ref.color,
      children = _ref.children,
      onClick = _ref.onClick;

  return _react2.default.createElement(
    'li',
    null,
    _react2.default.createElement(
      'a',
      { style: { cursor: 'pointer' }, onClick: onClick },
      _react2.default.createElement(
        'h3',
        null,
        children,
        _react2.default.createElement(
          'small',
          { className: 'pull-right' },
          progress,
          '%'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'progress xs' },
        _react2.default.createElement(
          'div',
          {
            className: 'progress-bar progress-bar-' + color,
            style: { width: progress + '%' }, role: 'progressbar',
            'aria-valuenow': '' + progress, 'aria-valuemin': '0',
            'aria-valuemax': '100'
          },
          _react2.default.createElement(
            'span',
            { className: 'sr-only' },
            progress,
            '% Complete'
          )
        )
      )
    )
  );
}

TasksMenuItem.propTypes = propTypes;

var _default = TasksMenuItem;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/lib/header/TasksMenuItem.js');

  __REACT_HOT_LOADER__.register(TasksMenuItem, 'TasksMenuItem', 'src/lib/header/TasksMenuItem.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/lib/header/TasksMenuItem.js');
}();

;