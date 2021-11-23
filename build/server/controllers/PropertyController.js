"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _PropertiesService = _interopRequireDefault(require("../services/PropertiesService"));

var _Utils = _interopRequireDefault(require("../utils/Utils"));

var util = new _Utils["default"]();

var PropertyController = /*#__PURE__*/function () {
  function PropertyController() {
    (0, _classCallCheck2["default"])(this, PropertyController);
  }

  (0, _createClass2["default"])(PropertyController, null, [{
    key: "getPropeties",
    value: function () {
      var _getPropeties = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var allProperties;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _PropertiesService["default"].getAllProperties();

              case 3:
                allProperties = _context.sent;
                console.log('Get all properties foiund', allProperties);

                if (allProperties.length > 0) {
                  util.setSuccess(200, 'Properties returned successfully', allProperties);
                } else {
                  util.setSuccess(200, 'No properties found at the moment');
                }

                return _context.abrupt("return", util.send(res));

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                util.setError(400, _context.t0);
                return _context.abrupt("return", util.send(res));

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      function getPropeties(_x, _x2) {
        return _getPropeties.apply(this, arguments);
      }

      return getPropeties;
    }()
  }, {
    key: "getASingleProperty",
    value: function () {
      var _getASingleProperty = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var id, property;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = req.params.id;

                if (Number(id)) {
                  _context2.next = 4;
                  break;
                }

                util.setError(400, 'Invalid property id, please input valid numeric number');
                return _context2.abrupt("return", util.send(res));

              case 4:
                _context2.prev = 4;
                _context2.next = 7;
                return _PropertiesService["default"].getSingleProperty(id);

              case 7:
                property = _context2.sent;
                console.log('The property found:', property);

                if (!property) {
                  util.setError(404, "Invalid property id, please input valid numeric number ".concat(id));
                } else {
                  util.setSuccess(200, 'Property returned successfully', property);
                }

                return _context2.abrupt("return", util.send(res));

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](4);
                util.setError(404, _context2.t0);
                return _context2.abrupt("return", util.send(res));

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[4, 13]]);
      }));

      function getASingleProperty(_x3, _x4) {
        return _getASingleProperty.apply(this, arguments);
      }

      return getASingleProperty;
    }()
  }, {
    key: "addProperty",
    value: function () {
      var _addProperty = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var _req$body, propertyTitle, slug, location, price, size, rooms, beds, bathrooms, featured, description, newProperty, createdProperty;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _req$body = req.body, propertyTitle = _req$body.propertyTitle, slug = _req$body.slug, location = _req$body.location, price = _req$body.price, size = _req$body.size, rooms = _req$body.rooms, beds = _req$body.beds, bathrooms = _req$body.bathrooms, featured = _req$body.featured, description = _req$body.description;

                if (!(propertyTitle === '' || slug === '' || location === '' || price === '' || size === '' || rooms === '' || beds === '' || bathrooms === '' || featured === '' || description === '')) {
                  _context3.next = 4;
                  break;
                }

                util.setError(400, 'Please provide complete details');
                return _context3.abrupt("return", util.send(res));

              case 4:
                newProperty = req.body;
                _context3.prev = 5;
                _context3.next = 8;
                return _PropertiesService["default"].addProperty(newProperty);

              case 8:
                createdProperty = _context3.sent;
                util.setSuccess(201, 'Property created successfully', createdProperty);
                return _context3.abrupt("return", util.send(res));

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](5);
                util.setError(400, _context3.t0.message);
                return _context3.abrupt("return", util.send(res));

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[5, 13]]);
      }));

      function addProperty(_x5, _x6) {
        return _addProperty.apply(this, arguments);
      }

      return addProperty;
    }()
  }, {
    key: "updatedProperty",
    value: function () {
      var _updatedProperty = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var updatedProperty, id, updateProperty;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                updatedProperty = req.body;
                id = req.params.id;

                if (Number(id)) {
                  _context4.next = 5;
                  break;
                }

                util.setError(400, 'Invalid property id, please input valid numeric number');
                return _context4.abrupt("return", util.send(res));

              case 5:
                _context4.prev = 5;
                _context4.next = 8;
                return _PropertiesService["default"].updateSingleProperty(id, updatedProperty);

              case 8:
                updateProperty = _context4.sent;

                if (!updateProperty) {
                  util.setError(404, "Property with this id does not exist: ".concat(id));
                } else {
                  util.setSuccess(200, 'Property updated successfully', updateProperty);
                }

                return _context4.abrupt("return", util.send(res));

              case 13:
                _context4.prev = 13;
                _context4.t0 = _context4["catch"](5);
                util.setError(404, _context4.t0);
                return _context4.abrupt("return", util.send(res));

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[5, 13]]);
      }));

      function updatedProperty(_x7, _x8) {
        return _updatedProperty.apply(this, arguments);
      }

      return updatedProperty;
    }()
  }, {
    key: "deleteProperty",
    value: function () {
      var _deleteProperty = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var id, property;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = req.params.id;

                if (Number(id)) {
                  _context5.next = 4;
                  break;
                }

                util.setError(400, 'Invalid property id, please input valid numeric number');
                return _context5.abrupt("return", util.send(res));

              case 4:
                _context5.prev = 4;
                _context5.next = 7;
                return _PropertiesService["default"].deleteSingleProperty(id);

              case 7:
                property = _context5.sent;

                if (property) {
                  util.setSuccess(200, 'Property deleted');
                } else {
                  util.setError(404, "Property with this id ".concat(id, " does not exist"));
                }

                return _context5.abrupt("return", util.send(res));

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](4);
                util.setError(400, _context5.t0);
                return _context5.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[4, 12]]);
      }));

      function deleteProperty(_x9, _x10) {
        return _deleteProperty.apply(this, arguments);
      }

      return deleteProperty;
    }()
  }]);
  return PropertyController;
}();

var _default = PropertyController;
exports["default"] = _default;
//# sourceMappingURL=PropertyController.js.map