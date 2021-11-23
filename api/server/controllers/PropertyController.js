import PropertiesService from '../services/PropertiesService';
import Util from '../utils/Utils';

const util = new Util();

class PropertyController {
  static async getPropeties(req, res) {
    try {
      const allProperties = await PropertiesService.getAllProperties();

      console.log('Get all properties foiund', allProperties);
      if (allProperties.length > 0) {
        util.setSuccess(200, 'Properties returned successfully', allProperties);
      } else {
        util.setSuccess(200, 'No properties found at the moment');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async getASingleProperty(req, res) {
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(
        400,
        'Invalid property id, please input valid numeric number'
      );
      return util.send(res);
    }

    try {
      const property = await PropertiesService.getSingleProperty(id);

      console.log('The property found:', property);

      if (!property) {
        util.setError(
          404,
          `Invalid property id, please input valid numeric number ${id}`
        );
      } else {
        util.setSuccess(200, 'Property returned successfully', property);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async addProperty(req, res) {
    const {
      propertyTitle,
      slug,
      location,
      price,
      size,
      rooms,
      beds,
      bathrooms,
      featured,
      description,
    } = req.body;

    if (
      propertyTitle === '' ||
      slug === '' ||
      location === '' ||
      price === '' ||
      size === '' ||
      rooms === '' ||
      beds === '' ||
      bathrooms === '' ||
      featured === '' ||
      description === ''
    ) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newProperty = req.body;
    try {
      const createdProperty = await PropertiesService.addProperty(newProperty);
      util.setSuccess(201, 'Property created successfully', createdProperty);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedProperty(req, res) {
    const updatedProperty = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(
        400,
        'Invalid property id, please input valid numeric number'
      );
      return util.send(res);
    }
    try {
      const updateProperty = await PropertiesService.updateSingleProperty(
        id,
        updatedProperty
      );
      if (!updateProperty) {
        util.setError(404, `Property with this id does not exist: ${id}`);
      } else {
        util.setSuccess(200, 'Property updated successfully', updateProperty);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteProperty(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(
        400,
        'Invalid property id, please input valid numeric number'
      );
      return util.send(res);
    }

    try {
      const property = await PropertiesService.deleteSingleProperty(id);

      if (property) {
        util.setSuccess(200, 'Property deleted');
      } else {
        util.setError(404, `Property with this id ${id} does not exist`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default PropertyController;
