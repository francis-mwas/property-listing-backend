import database from '../src/models';

class PropertiesService {
  static async getAllProperties() {
    try {
      return await database.property_listing.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addProperty(newProperty) {
    try {
      return await database.property_listing.create(newProperty);
    } catch (error) {
      throw error;
    }
  }

  static async updateSingleProperty(id, updateProperty) {
    try {
      const propertyToUpdate = await database.property_listing.findOne({
        where: { id: Number(id) },
      });

      if (propertyToUpdate) {
        await database.property_listing.update(updateProperty, {
          where: { id: Number(id) },
        });

        return updateProperty;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getSingleProperty(id) {
    console.log('Start to get a single property');
    try {
      const property = await database.property_listing.findOne({
        where: { id: Number(id) },
      });
      console.log('Thye property is here:', property);
      return property;
    } catch (error) {
      throw error;
    }
  }

  static async deleteSingleProperty(id) {
    try {
      const propertyToDelete = await database.property_listing.findOne({
        where: { id: Number(id) },
      });

      if (propertyToDelete) {
        const deletedProperty = await database.property_listing.destroy({
          where: { id: Number(id) },
        });
        return deletedProperty;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default PropertiesService;
