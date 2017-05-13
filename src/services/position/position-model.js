'use strict';

// position-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const position = sequelize.define('positions', {
    profileID: {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false
    },
    type: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    imageURL: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    longitude: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    latitude: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    accuracy: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    minZoom: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
  }, {
    freezeTableName: true
  });

  position.sync();

  return position;
};
