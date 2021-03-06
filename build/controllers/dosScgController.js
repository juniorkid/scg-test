"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _findXYZ = _interopRequireDefault(require("../functions/findXYZ"));

var _findBC = require("../functions/findBC");

var _findBestRoute = _interopRequireDefault(require("../functions/findBestRoute"));

var _default = {
  findXYZ: _findXYZ["default"],
  findB: _findBC.findB,
  findC: _findBC.findC,
  findBestRoute: _findBestRoute["default"]
};
exports["default"] = _default;
//# sourceMappingURL=dosScgController.js.map