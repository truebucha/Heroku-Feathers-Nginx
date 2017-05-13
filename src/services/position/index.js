'use strict';

const service = require('feathers-sequelize');
const position = require('./position-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: position(app.get('sequelize')),
    paginate: {
      default: 50,
      max: 150
    }
  };

  // Initialize our service with any options it requires
  app.use('/positions', service(options));

  // Get our initialize service to that we can bind hooks
  const positionService = app.service('/positions');

  // Set up our before hooks
  positionService.before(hooks.before);

  // Set up our after hooks
  positionService.after(hooks.after);
};
