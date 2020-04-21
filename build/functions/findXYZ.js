"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(index) {
  console.log('index: ', index);
  return findXYZ(index);
};

exports["default"] = _default;

var findXYZ = function findXYZ(index) {
  if (index === 0) return 3;else return findXYZ(index - 1) + (index - 1) * 2;
};
//# sourceMappingURL=findXYZ.js.map