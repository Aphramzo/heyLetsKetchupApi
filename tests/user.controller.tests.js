const sinon = require('sinon');
const should = require('should'); // eslint-disable-line
const userController = require('../controllers/user.controller');

describe('User Controller', () => {
  describe('Post', () => {
    it('First name is required', () => {
      function User() {
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

      const controller = userController(User);
      controller.create(req, res);

      res.status.calledWith(400).should.equal(true);
    });
  });
});
