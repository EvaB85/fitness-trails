'use strict';
module.exports = (sequelize, DataTypes) => {
  var trailsUsers = sequelize.define('trailsUsers', {
    trailId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  trailsUsers.associate = function(models) {
    // associations can be defined here
  };
  return trailsUsers;
};