import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../index';

chai.use(chatHttp);
const { expect } = chai;

describe('Testing the property endpoints:', () => {
  it('It should create a property', (done) => {
    const property = {
      propertyTitle: 'Garden city villas',
      slug: 'House for rent',
      location: 'Kasarani area',
      price: 7800000,
      size: 600,
      rooms: 6,
      beds: 7,
      bathrooms: 4,
      featured: true,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
    };
    chai
      .request(app)
      .post('/api/v1/properties')
      .set('Accept', 'application/json')
      .send(property)
      .end((err, res) => {
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
          description:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        });
        done();
      });
  });

  it('It should not create a property with some empty fields', (done) => {
    const property = {
      slug: 'House for rent',
      location: 'Kasarani area',
      price: 7800000,
      size: 600,
    };
    chai
      .request(app)
      .post('/api/v1/properties')
      .set('Accept', 'application/json')
      .send(property)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('It should get all properties', (done) => {
    chai
      .request(app)
      .get('/api/v1/properties')
      .set('Accept', 'application/json')
      .end((err, res) => {
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

  it('It should get a certain property', (done) => {
    const propertyId = 1;
    chai
      .request(app)
      .get(`/api/v1/books/${propertyId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('title');
        res.body.data.should.have.property('price');
        res.body.data.should.have.property('description');
        done();
      });
  });

  it('It should not get a particular book with invalid id', (done) => {
    const bookId = 8888;
    chai
      .request(app)
      .get(`/api/v1/books/${bookId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have
          .property('message')
          .eql(`Cannot find book with the id ${bookId}`);
        done();
      });
  });

  it('It should not get a particular book with non-numeric id', (done) => {
    const bookId = 'aaa';
    chai
      .request(app)
      .get(`/api/v1/books/${bookId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have
          .property('message')
          .eql('Please input a valid numeric value');
        done();
      });
  });

  it('It should update a book', (done) => {
    const bookId = 1;
    const updatedBook = {
      id: bookId,
      title: 'Updated Awesome book',
      price: '$10.99',
      description: 'We have updated the price',
    };
    chai
      .request(app)
      .put(`/api/v1/books/${bookId}`)
      .set('Accept', 'application/json')
      .send(updatedBook)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data.id).equal(updatedBook.id);
        expect(res.body.data.title).equal(updatedBook.title);
        expect(res.body.data.price).equal(updatedBook.price);
        expect(res.body.data.description).equal(updatedBook.description);
        done();
      });
  });

  it('It should not update a book with invalid id', (done) => {
    const bookId = '9999';
    const updatedBook = {
      id: bookId,
      title: 'Updated Awesome book again',
      price: '$11.99',
      description: 'We have updated the price',
    };
    chai
      .request(app)
      .put(`/api/v1/books/${bookId}`)
      .set('Accept', 'application/json')
      .send(updatedBook)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have
          .property('message')
          .eql(`Cannot find book with the id: ${bookId}`);
        done();
      });
  });

  it('It should not update a book with non-numeric id value', (done) => {
    const bookId = 'ggg';
    const updatedBook = {
      id: bookId,
      title: 'Updated Awesome book again',
      price: '$11.99',
      description: 'We have updated the price',
    };
    chai
      .request(app)
      .put(`/api/v1/books/${bookId}`)
      .set('Accept', 'application/json')
      .send(updatedBook)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have
          .property('message')
          .eql('Please input a valid numeric value');
        done();
      });
  });

  it('It should delete a book', (done) => {
    const bookId = 1;
    chai
      .request(app)
      .delete(`/api/v1/books/${bookId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.include({});
        done();
      });
  });

  it('It should not delete a book with invalid id', (done) => {
    const bookId = 777;
    chai
      .request(app)
      .delete(`/api/v1/books/${bookId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have
          .property('message')
          .eql(`Book with the id ${bookId} cannot be found`);
        done();
      });
  });

  it('It should not delete a book with non-numeric id', (done) => {
    const bookId = 'bbb';
    chai
      .request(app)
      .delete(`/api/v1/books/${bookId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have
          .property('message')
          .eql('Please provide a numeric value');
        done();
      });
  });
});
