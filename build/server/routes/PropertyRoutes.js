"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _PropertyController = _interopRequireDefault(require("../controllers/PropertyController"));

var router = (0, _express.Router)();
router.get('/', _PropertyController["default"].getPropeties);
router.get('/:id', _PropertyController["default"].getASingleProperty);
router.post('/', _PropertyController["default"].addProperty);
router.put('/:id', _PropertyController["default"].updatedProperty);
router["delete"]('/:id', _PropertyController["default"].deleteProperty);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=PropertyRoutes.js.map