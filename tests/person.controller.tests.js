const sinon = require('sinon');
const should = require('should'); // eslint-disable-line
const personController = require('../controllers/person.controller');

describe('Person Controller', () => {
  describe('Post', () => {
    it('First name is required', () => {
      function Person() {
        this.save = () => {};
      }
      const req = {
        firstName: null,
        lastName: 'Smith',
      };
      const res = {
        json: sinon.spy(),
        send: sinon.spy(),
        status: sinon.spy(),
      };

      const controller = personController(Person);
      controller.create(req, res);

      res.status.calledWith(400).should.equal(true);
    });
  });
});
