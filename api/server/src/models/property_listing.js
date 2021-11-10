'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class property_listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  property_listing.init({
    propertyTitle: DataTypes.STRING,
    slug: DataTypes.STRING,
    location: DataTypes.STRING,
    price: DataTypes.NUMBER,
    size: DataTypes.NUMBER,
    rooms: DataTypes.NUMBER,
    beds: DataTypes.NUMBER,
    bathrooms: DataTypes.NUMBER,
    featured: DataTypes.BOOLEAN,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'property_listing',
  });
  return property_listing;
};