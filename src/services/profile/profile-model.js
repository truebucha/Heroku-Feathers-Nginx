'use strict';

// profile-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const profile = sequelize.define('profiles', {
    userID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true
    },
    type: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    nick: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    imageURL: {
      type: Sequelize.STRING,
      allowNull: true
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    }
  }, {
    freezeTableName: true
  });

  profile.sync();

  return profile;
};
