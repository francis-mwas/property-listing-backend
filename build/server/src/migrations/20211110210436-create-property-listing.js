'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

module.exports = {
  up: function () {
    var _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryInterface, Sequelize) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return queryInterface.createTable('property_listings', {
                id: {
                  allowNull: false,
                  autoIncrement: true,
                  primaryKey: true,
                  type: Sequelize.INTEGER
                },
                propertyTitle: {
                  type: Sequelize.STRING,
                  allowNull: false
                },
                slug: {
                  type: Sequelize.STRING,
                  allowNull: false
                },
                location: {
                  type: Sequelize.STRING,
                  allowNull: false
                },
                price: {
                  type: Sequelize.INTEGER,
                  allowNull: false
                },
                size: {
                  type: Sequelize.INTEGER,
                  allowNull: false
                },
                rooms: {
                  type: Sequelize.INTEGER,
                  allowNull: false
                },
                beds: {
                  type: Sequelize.INTEGER,
                  allowNull: false
                },
                bathrooms: {
                  type: Sequelize.INTEGER,
                  allowNull: false
                },
                featured: {
                  type: Sequelize.BOOLEAN,
                  allowNull: false
                },
                description: {
                  type: Sequelize.STRING,
                  allowNull: false
                },
                createdAt: {
                  allowNull: false,
                  type: Sequelize.DATE
                },
                updatedAt: {
                  allowNull: false,
                  type: Sequelize.DATE
                }
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function up(_x, _x2) {
      return _up.apply(this, arguments);
    }

    return up;
  }(),
  down: function () {
    var _down = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(queryInterface, Sequelize) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return queryInterface.dropTable('property_listings');

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function down(_x3, _x4) {
      return _down.apply(this, arguments);
    }

    return down;
  }()
};
//# sourceMappingURL=20211110210436-create-property-listing.js.map