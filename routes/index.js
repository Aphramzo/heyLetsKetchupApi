const personRouter = require('./person.router');
const groupRouter = require('./groups.router');
const authRouter = require('./auth.router');
const userGroupAssignmentRouter = require('./userGroupAssignment.router');

module.exports = {
  authRouter,
  groupRouter,
  personRouter,
  userGroupAssignmentRouter,
};
