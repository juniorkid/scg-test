"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("core-js/modules/es6.array.index-of");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _memoryCache = _interopRequireDefault(require("memory-cache"));

require("dotenv/config");

var _dosScgController = _interopRequireDefault(require("./controllers/dosScgController"));

// configure cache middleware
var memCache = new _memoryCache["default"].Cache(); // duration seconds

var cacheMiddleware = function cacheMiddleware(duration) {
  return function (req, res, next) {
    var key = '__express__' + req.originalUrl || req.url;
    var cacheContent = memCache.get(key);

    if (cacheContent) {
      console.log('cacheContent: ', cacheContent);
      res.send(JSON.parse(cacheContent));
      return;
    } else {
      res.sendResponse = res.send;

      res.send = function (body) {
        memCache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };

      next();
    }
  };
};

var app = (0, _express["default"])(); // app.use(bodyparser);

app.listen(3000, function () {
  return console.log('Example app listening on port 3000!');
});
app.get("/findXYZ", cacheMiddleware(600), function (req, res) {
  var problem = ['X', 'Y', 5, 9, 15, 23, 'Z'];

  var x = _dosScgController["default"].findXYZ(problem.indexOf('X'));

  var y = _dosScgController["default"].findXYZ(problem.indexOf('Y'));

  var z = _dosScgController["default"].findXYZ(problem.indexOf('Z'));

  res.send({
    x: x,
    y: y,
    z: z
  });
});
app.get("/findBC", cacheMiddleware(600), function (req, res) {
  var a = 21;

  var b = _dosScgController["default"].findB(a);

  var c = _dosScgController["default"].findC(a);

  res.json({
    b: b,
    c: c
  });
});
app.get("/findBestPath", cacheMiddleware(600), /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var origin, destination, response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            origin = "Central World";
            destination = "SCG Bangsue";
            _context.next = 4;
            return _dosScgController["default"].findBestRoute(origin, destination);

          case 4:
            response = _context.sent;
            // console.log('response: ', response)
            res.json(response);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.post("/webhook", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res.sendStatus(200);

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
//# sourceMappingURL=index.js.map