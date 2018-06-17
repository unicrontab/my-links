'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Links = require('./Links');

var _Links2 = _interopRequireDefault(_Links);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders without crashing', function () {
    var data = [{ url: '#', icon: 'default' }];
    var color = '#FFFFFF';
    var div = document.createElement('div');
    _reactDom2.default.render(_react2.default.createElement(_Links2.default, { data: data, color: color }), div);
});