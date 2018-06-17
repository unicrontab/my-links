'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    padding: 5px;\n    display: grid;\n    transition: transform 0.2s ease-in-out;\n    justify-content: end;\n    justify-items: end;\n    align-items: center;\n'], ['\n    padding: 5px;\n    display: grid;\n    transition: transform 0.2s ease-in-out;\n    justify-content: end;\n    justify-items: end;\n    align-items: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    padding: 0.2rem;\n    width: 25px;\n    height: 25px;\n    &:hover {\n        transform: scale(1.4);\n    }\n    grid-row: 1;\n'], ['\n    padding: 0.2rem;\n    width: 25px;\n    height: 25px;\n    &:hover {\n        transform: scale(1.4);\n    }\n    grid-row: 1;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\n'], ['\n\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icons = require('../icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LinkContainer = _styledComponents2.default.div(_templateObject);

var Link = _styledComponents2.default.a(_templateObject2);
var Icon = _styledComponents2.default.svg(_templateObject3);

var createLink = function createLink(url, icon, color) {
    return _react2.default.createElement(
        Link,
        { key: url, href: url },
        _react2.default.createElement(
            Icon,
            {
                width: '20',
                height: '20',
                viewBox: '0 0 1792 1792',
                fill: color
            },
            _icons2.default[icon] || _icons2.default.default
        )
    );
};

var Links = function Links(props) {
    return _react2.default.createElement(
        LinkContainer,
        null,
        props.data.map(function (link) {
            return createLink(link.url, link.icon, props.color);
        })
    );
};

exports.default = Links;