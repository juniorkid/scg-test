"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.function.name");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var DOSCG = /*#__PURE__*/function () {
  function DOSCG(name) {
    (0, _classCallCheck2["default"])(this, DOSCG);
    this.name = name;
  }

  (0, _createClass2["default"])(DOSCG, null, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
      return this;
    }
  }]);
  return DOSCG;
}();
//# sourceMappingURL=Doscg.js.map