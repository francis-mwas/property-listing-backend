"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _PropertyRoutes = _interopRequireDefault(require("./server/routes/PropertyRoutes"));

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
var port = process.env.PORT || 8000;
app.use('/api/v1/properties', _PropertyRoutes["default"]); // Handle undefined routes

app.get('*', function (req, res) {
  return res.status(404).send({
    message: 'Url does not exist on this server, but hey thank you for visiting our API.'
  });
});
app.listen(port, function () {
  console.log("Server is running on PORT ".concat(port));
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=index.js.map