'use strict';
module.exports = (sequelize, DataTypes) => {
  var trail = sequelize.define('trail', {
    uniqueTrailId: DataTypes.INTEGER
  }, {});
  trail.associate = function(models) {
    // associations can be defined here
    models.trail.belongsToMany(models.user, {through: "trailsUsers"})
  };
  return trail;
};
