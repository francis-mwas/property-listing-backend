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

var _models = _interopRequireDefault(require("../src/models"));

var PropertiesService = /*#__PURE__*/function () {
  function PropertiesService() {
    (0, _classCallCheck2["default"])(this, PropertiesService);
  }

  (0, _createClass2["default"])(PropertiesService, null, [{
    key: "getAllProperties",
    value: function () {
      var _getAllProperties = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].property_listing.findAll();

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));

      function getAllProperties() {
        return _getAllProperties.apply(this, arguments);
      }

      return getAllProperties;
    }()
  }, {
    key: "addProperty",
    value: function () {
      var _addProperty = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(newProperty) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _models["default"].property_listing.create(newProperty);

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }));

      function addProperty(_x) {
        return _addProperty.apply(this, arguments);
      }

      return addProperty;
    }()
  }, {
    key: "updateSingleProperty",
    value: function () {
      var _updateSingleProperty = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id, updateProperty) {
        var propertyToUpdate;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _models["default"].property_listing.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                propertyToUpdate = _context3.sent;

                if (!propertyToUpdate) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 7;
                return _models["default"].property_listing.update(updateProperty, {
                  where: {
                    id: Number(id)
                  }
                });

              case 7:
                return _context3.abrupt("return", updateProperty);

              case 8:
                return _context3.abrupt("return", null);

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                throw _context3.t0;

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 11]]);
      }));

      function updateSingleProperty(_x2, _x3) {
        return _updateSingleProperty.apply(this, arguments);
      }

      return updateSingleProperty;
    }()
  }, {
    key: "getSingleProperty",
    value: function () {
      var _getSingleProperty = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
        var property;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log('Start to get a single property');
                _context4.prev = 1;
                _context4.next = 4;
                return _models["default"].property_listing.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 4:
                property = _context4.sent;
                console.log('Thye property is here:', property);
                return _context4.abrupt("return", property);

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](1);
                throw _context4.t0;

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 9]]);
      }));

      function getSingleProperty(_x4) {
        return _getSingleProperty.apply(this, arguments);
      }

      return getSingleProperty;
    }()
  }, {
    key: "deleteSingleProperty",
    value: function () {
      var _deleteSingleProperty = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
        var propertyToDelete, deletedProperty;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _models["default"].property_listing.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                propertyToDelete = _context5.sent;

                if (!propertyToDelete) {
                  _context5.next = 9;
                  break;
                }

                _context5.next = 7;
                return _models["default"].property_listing.destroy({
                  where: {
                    id: Number(id)
                  }
                });

              case 7:
                deletedProperty = _context5.sent;
                return _context5.abrupt("return", deletedProperty);

              case 9:
                return _context5.abrupt("return", null);

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](0);
                throw _context5.t0;

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 12]]);
      }));

      function deleteSingleProperty(_x5) {
        return _deleteSingleProperty.apply(this, arguments);
      }

      return deleteSingleProperty;
    }()
  }]);
  return PropertiesService;
}();

var _default = PropertiesService;
exports["default"] = _default;
//# sourceMappingURL=PropertiesService.js.map