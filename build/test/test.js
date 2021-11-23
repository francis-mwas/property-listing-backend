"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

require("chai/register-should");

var _index = _interopRequireDefault(require("../index"));

_chai["default"].use(_chaiHttp["default"]);

var expect = _chai["default"].expect;
describe('Testing the property endpoints:', function () {
  it('It should create a property', function (done) {
    var property = {
      propertyTitle: 'Garden city villas',
      slug: 'House for rent',
      location: 'Kasarani area',
      price: 7800000,
      size: 600,
      rooms: 6,
      beds: 7,
      bathrooms: 4,
      featured: true,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    };

    _chai["default"].request(_index["default"]).post('/api/v1/properties').set('Accept', 'application/json').send(property).end(function (err, res) {
      expect(res.status).to.equal(201);
      expect(res.body.data).to.include({
        propertyTitle: 'Garden city villas',
        slug: 'House for rent',
        location: 'Kasarani area',
        price: 7800000,
        size: 600,
        rooms: 6,
        beds: 7,
        bathrooms: 4,
        featured: true,
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
      });
      done();
    });
  });
  it('It should not create a property with some empty fields', function (done) {
    var property = {
      slug: 'House for rent',
      location: 'Kasarani area',
      price: 7800000,
      size: 600
    };

    _chai["default"].request(_index["default"]).post('/api/v1/properties').set('Accept', 'application/json').send(property).end(function (err, res) {
      expect(res.status).to.equal(400);
      done();
    });
  });
  it('It should get all properties', function (done) {
    _chai["default"].request(_index["default"]).get('/api/v1/properties').set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      res.body.data[0].should.have.property('id');
      res.body.data[0].should.have.property('propertyTitle');
      res.body.data[0].should.have.property('slug');
      res.body.data[0].should.have.property('location');
      res.body.data[0].should.have.property('price');
      res.body.data[0].should.have.property('size');
      res.body.data[0].should.have.property('rooms');
      res.body.data[0].should.have.property('beds');
      res.body.data[0].should.have.property('bathrooms');
      res.body.data[0].should.have.property('featured');
      res.body.data[0].should.have.property('description');
      done();
    });
  });
  it('It should get a certain property', function (done) {
    var propertyId = 1;

    _chai["default"].request(_index["default"]).get("/api/v1/properties/".concat(propertyId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      res.body.data.should.have.property('id');
      res.body.data.should.have.property('propertyTitle');
      res.body.data.should.have.property('slug');
      res.body.data.should.have.property('price');
      res.body.data.should.have.property('size');
      res.body.data.should.have.property('rooms');
      res.body.data.should.have.property('beds');
      res.body.data.should.have.property('bathrooms');
      res.body.data.should.have.property('featured');
      res.body.data.should.have.property('description');
      done();
    });
  });
  it('It should not get a single property with invalid id', function (done) {
    var propertyId = 492;

    _chai["default"].request(_index["default"]).get("/api/v1/properties/".concat(propertyId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("Invalid property id, please input valid numeric number ".concat(propertyId));
      done();
    });
  });
  it('It should not get a particular property with non-numeric id', function (done) {
    var propertyId = 'djkljkljk';

    _chai["default"].request(_index["default"]).get("/api/v1/properties/".concat(propertyId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql('Invalid property id, please input valid numeric number');
      done();
    });
  });
  it('It should update a property', function (done) {
    var propertyId = 1;
    var updatedProperty = {
      id: propertyId,
      propertyTitle: 'Title have been updated!',
      slug: 'House for sale and rent',
      location: 'Kasarani area',
      price: 85000000,
      size: 600,
      rooms: 6,
      beds: 5,
      bathrooms: 3,
      featured: true,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    };

    _chai["default"].request(_index["default"]).put("/api/v1/properties/".concat(propertyId)).set('Accept', 'application/json').send(updatedProperty).end(function (err, res) {
      expect(res.status).to.equal(200);
      expect(res.body.data.id).equal(updatedProperty.id);
      expect(res.body.data.propertyTitle).equal(updatedProperty.propertyTitle);
      expect(res.body.data.slug).equal(updatedProperty.slug);
      expect(res.body.data.location).equal(updatedProperty.location);
      expect(res.body.data.price).equal(updatedProperty.price);
      expect(res.body.data.size).equal(updatedProperty.size);
      expect(res.body.data.rooms).equal(updatedProperty.rooms);
      expect(res.body.data.beds).equal(updatedProperty.beds);
      expect(res.body.data.bathrooms).equal(updatedProperty.bathrooms);
      expect(res.body.data.featured).equal(updatedProperty.featured);
      expect(res.body.data.description).equal(updatedProperty.description);
      done();
    });
  });
  it('It should not update a property with invalid id', function (done) {
    var propertyId = '56556';
    var updatedProperty = {
      id: propertyId,
      propertyTitle: 'Title have been updated!',
      slug: 'House for sale and rent',
      location: 'Kasarani area',
      price: 85000000,
      size: 600,
      rooms: 6,
      beds: 5,
      bathrooms: 3,
      featured: true,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    };

    _chai["default"].request(_index["default"]).put("/api/v1/properties/".concat(propertyId)).set('Accept', 'application/json').send(updatedProperty).end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("Property with this id does not exist: ".concat(propertyId));
      done();
    });
  });
  it('It should not update a property with non-numeric id value', function (done) {
    var propertyId = 'dyudkdkjj';
    var updatedProperty = {
      id: propertyId,
      propertyTitle: 'Title have been updated!',
      slug: 'House for sale and rent',
      location: 'Kasarani area',
      price: 85000000,
      size: 600,
      rooms: 6,
      beds: 5,
      bathrooms: 3,
      featured: true,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    };

    _chai["default"].request(_index["default"]).put("/api/v1/properties/".concat(propertyId)).set('Accept', 'application/json').send(updatedProperty).end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql('Invalid property id, please input valid numeric number');
      done();
    });
  });
  it('It should delete a property', function (done) {
    var propertyId = 1;

    _chai["default"].request(_index["default"])["delete"]("/api/v1/properties/".concat(propertyId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      expect(res.body.data).to.include({});
      done();
    });
  });
  it('It should not delete a property with invalid id', function (done) {
    var propertyId = 111;

    _chai["default"].request(_index["default"])["delete"]("/api/v1/properties/".concat(propertyId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("Property with this id ".concat(propertyId, " does not exist"));
      done();
    });
  });
  it('It should not delete a property with non-numeric id', function (done) {
    var propertyId = 'propetry';

    _chai["default"].request(_index["default"])["delete"]("/api/v1/properties/".concat(propertyId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql('Invalid property id, please input valid numeric number');
      done();
    });
  });
});
//# sourceMappingURL=test.js.map