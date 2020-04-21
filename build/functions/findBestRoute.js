"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _get = _interopRequireDefault(require("lodash/get"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _default = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var origin,
      destination,
      url,
      params,
      response,
      json,
      _args = arguments;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          origin = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
          destination = _args.length > 1 && _args[1] !== undefined ? _args[1] : '';
          url = 'https://maps.googleapis.com/maps/api/directions/json?';
          params = new URLSearchParams({
            origin: origin,
            destination: destination,
            key: process.env.GOOGLE_API_KEY
          });
          _context.prev = 4;
          _context.next = 7;
          return (0, _nodeFetch["default"])(url + params);

        case 7:
          response = _context.sent;
          _context.next = 10;
          return response.json();

        case 10:
          json = _context.sent;
          return _context.abrupt("return", json.routes);

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](4);
          console.log(_context.t0);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[4, 14]]);
}));

exports["default"] = _default;
//# sourceMappingURL=findBestRoute.js.map